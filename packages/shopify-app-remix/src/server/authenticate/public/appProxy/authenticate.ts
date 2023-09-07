import {ShopifyRestResources} from '@shopify/shopify-api';

import {adminClientFactory} from '../../../clients/admin';
import {BasicParams} from '../../../types';

import {
  AppProxyContextWithoutSession,
  AppProxyContextWithSession,
  AuthenticateAppProxy,
  LiquidResponseFunction,
} from './types';

export function authenticateAppProxyFactory<
  Resources extends ShopifyRestResources,
>(params: BasicParams): AuthenticateAppProxy {
  const {api, config, logger} = params;

  return async function authenticate(
    request,
  ): Promise<
    AppProxyContextWithoutSession | AppProxyContextWithSession<Resources>
  > {
    logger.info('Authenticating app proxy request');

    const {searchParams} = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());
    let isValid = false;

    try {
      isValid = await api.utils.validateHmac(query, {
        signator: 'appProxy',
      });
    } catch (error) {
      logger.info(error.message);
      throw new Response(undefined, {status: 400, statusText: 'Bad Request'});
    }

    if (!isValid) {
      logger.info('App proxy request has invalid signature');
      throw new Response(undefined, {
        status: 400,
        statusText: 'Bad Request',
      });
    }

    const shop = searchParams.get('shop')!;
    const sessionId = api.session.getOfflineId(shop);
    const session = await config.sessionStorage.loadSession(sessionId);

    if (!session) {
      const context: AppProxyContextWithoutSession = {
        liquid,
        session: undefined,
        admin: undefined,
      };

      return context;
    }

    const context: AppProxyContextWithSession<Resources> = {
      liquid,
      session,
      admin: adminClientFactory({params, session}),
    };

    return context;
  };
}

// ignoring because I want to type the function using LiquidResponseFunction
// eslint-disable-next-line func-style
const liquid: LiquidResponseFunction = function liquid(body, init, options) {
  const responseInit = typeof init === 'number' ? {status: init} : init || {};
  const responseBody =
    options?.layout === false ? `{% layout none %} ${body}` : body;

  const headers = new Headers(responseInit.headers);
  headers.set('Content-Type', 'application/liquid');

  return new Response(responseBody, {
    ...responseInit,
    headers,
  });
};
