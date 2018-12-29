# Google Domains

[![npm version](https://badge.fury.io/js/google-domains.svg)](https://badge.fury.io/js/google-domains)
![ndoe version](https://img.shields.io/node/v/google-domains.svg)
![github tag](https://img.shields.io/github/tag-date/lenconda/google-domains.svg)
![monthly downloads](https://img.shields.io/npm/dm/google-domains.svg)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/lenconda/google-domains/blob/master/LICENSE)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)

Get Google domains.

## Requirements

| Item        | Details                                               |
| ----------- | ------------------------------------------------------------ |
| System      | GNU/Linux (>=2.6.x), macOS (>=10.10.x), Windows (later than XP) |
| Environment | Node.js >= 8.2.0                                              |

## Installation

```bash
# under product mode
$ npm install google-domains --save

# under development mode
$ npm install google-domains --save-dev
```

## Quick Start

After you finished the installation above, you will have a package `google-domains` in your `./node_modules` directory.

### Import

Default module exports in CommonJS style

```javascript
const GoogleDomains = require('google-domains');
const googleDomains = new GoogleDomains();
```

### Usages

###### googleDomains.fetch()

Returns a Promise object that contains all known Google domains.

Recommanded usage:

```javascript
let data;
try {
  data = await googleDomains.fetch();
} catch (error) {
  throw new Error(error);
}
```

or alternatively:

```javascript
googleDomains.fetch()
          .then(function (data) {
            // get proxies here
          })
          .catch(function (error) {
            throw new Error(error);
          });
```

###### googleDomains.random()

Get an object of Google domain information randomly.

Recommanded usage:

```javascript
let data;
try {
  data = await googleDomains.random();
} catch (error) {
  throw new Error(error);
}
```

or alternatively:

```javascript
googleDomains.random()
          .then(function (data) {
            // get data here
          })
          .catch(function (error) {
            throw new Error(error);
          });
```

###### googleDomains.randomUrl()

Get a string of Google url randomly.

Recommanded usage:

```javascript
let data;
try {
  data = await googleDomains.randomUrl();
} catch (error) {
  throw new Error(error);
}
```

or alternatively:

```javascript
googleDomains.randomUrl()
          .then(function (data) {
            // get data here
          })
          .catch(function (error) {
            throw new Error(error);
          });
```

## Tests

To run the test suite, go to the root directory of this package, and install dependencies, and then run `npm test` or `npm run test`:

```bash
$ cd /path/to/google-domains
$ npm install
$ npm test
# or
$ npm run test
```

# License

[MIT](License)