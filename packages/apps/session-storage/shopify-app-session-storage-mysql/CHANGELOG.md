# @shopify/shopify-app-session-storage-mysql

## 3.0.3

### Patch Changes

- 4aa4b59: Bump shopify-api to v9.6.0
- 883fe7b: Bumps @shopify/shopify-api to v9.6.2
- 753d406: Update @shopify/shopify-api to v9.7.1
- Updated dependencies [4aa4b59]
- Updated dependencies [883fe7b]
- Updated dependencies [753d406]
  - @shopify/shopify-app-session-storage@2.1.3

## 3.0.2

### Patch Changes

- 3938adc: Update shopify-api-js to v9.5
- c6c975f: Update @shopify/shopify-api to 9.5.1
- Updated dependencies [3938adc]
- Updated dependencies [c6c975f]
  - @shopify/shopify-app-session-storage@2.1.2

## 3.0.1

### Patch Changes

- 02a8341: Updated dependency on `@shopify/shopify-api` to 9.3.1
- 321d6a4: Update @shopify/shopify-api to 9.3.2
- Updated dependencies [02a8341]
- Updated dependencies [321d6a4]
  - @shopify/shopify-app-session-storage@2.1.1

## 3.0.0

### Minor Changes

- 64e0246: Update shopify-api version to 9.2.0

### Patch Changes

- f5742c1: Updated dependency on `@shopify/shopify-api`
- Updated dependencies [f5742c1]
- Updated dependencies [64e0246]
  - @shopify/shopify-app-session-storage@2.1.0

## 2.0.4

### Patch Changes

- b4eeb24: Improved and simplified package.json dependencies
- b998c30: Bump shopify-api version from 9.0.1 to 9.0.2
- Updated dependencies [b4eeb24]
- Updated dependencies [b998c30]
  - @shopify/shopify-app-session-storage@2.0.4

## 2.0.3

### Patch Changes

- d3e4b5e: Updated the dependency on `@shopify/shopify-api`
- Updated dependencies [d3e4b5e]
  - @shopify/shopify-app-session-storage@2.0.3

## 2.0.2

### Patch Changes

- 3685bd4: Bump shopify-api to ^8.1.1
- Updated dependencies [3685bd4]
  - @shopify/shopify-app-session-storage@2.0.2

## 2.0.1

### Patch Changes

- 6d12840: Updating dependencies on @shopify/shopify-api
- Updated dependencies [6d12840]
  - @shopify/shopify-app-session-storage@2.0.1

## 2.0.0

### Major Changes

- f837060: **Removed support for Node 14**

  Node 14 has reached its [EOL](https://endoflife.date/nodejs), and dependencies to this package no longer work on Node 14.
  Because of that, we can no longer support that version.

  If your app is running on Node 14, you'll need to update to a more recent version before upgrading this package.

  This upgrade does not require any code changes.

### Patch Changes

- a69d6fc: Updating dependency on @shopify/shopify-api to v.8.0.1
- Updated dependencies [f837060]
- Updated dependencies [a69d6fc]
  - @shopify/shopify-app-session-storage@2.0.0

## 1.1.13

### Patch Changes

- 616388d: Updating dependency on @shopify/shopify-api to 7.7.0
- Updated dependencies [616388d]
  - @shopify/shopify-app-session-storage@1.1.10

## 1.1.12

### Patch Changes

- 5b862fe: Upgraded shopify-api dependency to 7.6.0
- Updated dependencies [5b862fe]
  - @shopify/shopify-app-session-storage@1.1.9

## 1.1.11

### Patch Changes

- 346b623: Updating dependency on @shopify/shopify-api
- Updated dependencies [346b623]
  - @shopify/shopify-app-session-storage@1.1.8

## 1.1.10

### Patch Changes

- 13b9048: Updating @shopify/shopify-api dependency to the latest version
- Updated dependencies [13b9048]
  - @shopify/shopify-app-session-storage@1.1.7

## 1.1.9

### Patch Changes

- 32296d7: Update @shopify/shopify-api dependency to 7.5.0
- Updated dependencies [32296d7]
  - @shopify/shopify-app-session-storage@1.1.6

## 1.1.8

### Patch Changes

- 93e9126: Updating @shopify/shopify-api dependency
- Updated dependencies [93e9126]
  - @shopify/shopify-app-session-storage@1.1.5

## 1.1.7

### Patch Changes

- b3453ff: Bumping @shopify/shopify-api dependency to latest version
- Updated dependencies [b3453ff]
  - @shopify/shopify-app-session-storage@1.1.4

## 1.1.6

### Patch Changes

- f5bb9f1: Bumps [mysql2](https://github.com/sidorares/node-mysql2) from 3.3.0 to 3.3.1. See mysql2's [changelog](https://github.com/sidorares/node-mysql2/blob/master/Changelog.md) for more details.

## 1.1.5

### Patch Changes

- e1d4f4f: Add @shopify/shopify-api as a peerDependencies entry for each session-storage package, to avoid API library conflicts (e.g., scopesArray.map error). Should help avoid issues like #93
- 2dd9ba5: Bumps [mysql2](Bumps mysql2 from 3.2.1 to 3.2.4.) from 3.2.1 to 3.2.4. See mysql2 [changelog](https://github.com/sidorares/node-mysql2/blob/master/Changelog.md) for more details.
- 1d007e8: Bumps [@shopify/shopify-api](../../shopify-api) from 7.0.0 to 7.1.0. See `@shopify/shopify-api`'s [changelog](../../shopify-api/CHANGELOG.md) for more details.
- 9aaf402: Bumps [mysql2](https://github.com/sidorares/node-mysql2) from 3.2.4 to 3.3.0. See mysql2's [changelog](https://github.com/sidorares/node-mysql2/blob/master/Changelog.md) for more details.
- Updated dependencies [e1d4f4f]
- Updated dependencies [1d007e8]
  - @shopify/shopify-app-session-storage@1.1.3

## 1.1.4

### Patch Changes

- d6171e2: Bump mysql2 from 3.2.0 to 3.2.1. See [mysql2 changelog](https://github.com/sidorares/node-mysql2/blob/master/Changelog.md#321-2023-04-13) for details.
- 9a65092: In 1.0.2 of MySQLSessionStorage, the constructor could accept either a URL object or a URL string. The string option was accidentally removed, starting 1.1.0. This patch adds it back in. Fixes #204

## 1.1.3

### Patch Changes

- 335c8df: MySQL session storage to use a connection pool instead of a single client connection. Fixes #150, #185
- 502b4c7: Bumps mysql2 from 3.1.2 to 3.2.0.
- e4f3415: Bump @shopify/shopify-api from 6.2.0 to 7.0.0. See [changelog](../../shopify-api/CHANGELOG.md) for details.
- 3969855: Use decodeURIComponent on password, user, database name fields prior to calling underlying MySQL connection. Fixes #163. Also applied to postgresql adapter.
- Updated dependencies [e4f3415]
  - @shopify/shopify-app-session-storage@1.1.2

## 1.1.2

### Patch Changes

- 97346b3: Fix #132: mysql migrator was unable to detect already applied migrations
- Updated dependencies [97346b3]
  - @shopify/shopify-app-session-storage@1.1.1

## 1.1.1

### Patch Changes

- a37f9db: Bump mysql2 to 3.1.2

## 1.1.0

### Minor Changes

- becc305: Migrations capabilities that can handle persistence changes for all session storage implementations

### Patch Changes

- 8f5749f: Increase size of 'scope' column to 1024 for session storage implementation for RDBMS
- b6501b0: Bump typescript to 4.9.5
- Updated dependencies [b6501b0]
- Updated dependencies [becc305]
  - @shopify/shopify-app-session-storage@1.1.0

## 1.0.2

### Patch Changes

- 222b755: Updating @shopify/shopify-api to v6.1.0
- Updated dependencies [222b755]
  - @shopify/shopify-app-session-storage@1.0.2

## 1.0.1

### Patch Changes

- 866b50c: Update dependencies on shopify-api v6.0.2
- Updated dependencies [866b50c]
  - @shopify/shopify-app-session-storage@1.0.1

## 1.0.0

### Major Changes

- Initial public release of @shopify/shopify-app-session-storage-mysql