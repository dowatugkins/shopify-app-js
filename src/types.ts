import {Request, Response} from 'express';
import {
  ConfigParams as ApiConfigParams,
  Session,
  ShopifyRestResources,
  Shopify,
} from '@shopify/shopify-api';

import {AuthConfigInterface} from './auth/types';
import {WebhooksConfigInterface} from './webhooks/types';
import {
  AuthenticatedRequestMiddleware,
  CspHeadersMiddleware,
  EnsureInstalledMiddleware,
} from './middlewares/types';
import {AppMiddleware} from './sub-app/types';
import {SessionStorage} from './session-storage/session-storage';

export * from './auth/types';
export * from './middlewares/types';
export * from './webhooks/types';

export interface AppConfigParams<R extends ShopifyRestResources = any> {
  api?: Partial<ApiConfigParams<R>>;
  useOnlineTokens?: boolean;
  exitIframePath?: string;
  auth?: Partial<AuthConfigInterface>;
  webhooks?: Partial<WebhooksConfigInterface>;
  sessionStorage: SessionStorage;
}

export interface AppConfigInterface extends Omit<AppConfigParams, 'api'> {
  useOnlineTokens: boolean;
  exitIframePath: string;
  auth: AuthConfigInterface;
  webhooks: WebhooksConfigInterface;
}

export interface ApiAndConfigParams {
  api: Shopify;
  config: AppConfigInterface;
}

export interface ShopifyApp<
  R extends ShopifyRestResources = ShopifyRestResources,
> {
  config: AppConfigInterface;
  api: Shopify<R>;
  app: AppMiddleware;
  authenticatedRequest: AuthenticatedRequestMiddleware;
  cspHeaders: CspHeadersMiddleware;
  ensureInstalled: EnsureInstalledMiddleware;
}

export interface RedirectToAuthParams extends ApiAndConfigParams {
  req: Request;
  res: Response;
}

export interface RedirectToHostParams {
  req: Request;
  res: Response;
  api: Shopify;
  session: Session;
}

export interface ReturnTopLevelRedirectionParams {
  res: Response;
  bearerPresent: boolean;
  redirectUrl: string;
}
