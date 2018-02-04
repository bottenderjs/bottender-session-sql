# bottender-session-sql

[![npm](https://img.shields.io/npm/v/bottender-session-sql.svg?style=flat-square)](https://www.npmjs.com/package/bottender-session-sql)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> SQL Session Store for [Bottender](https://github.com/Yoctol/bottender).

## Installation

```sh
npm install bottender-session-sql
```

## Usage

Publish migrations:

```
bottender-session-sql migrations:publish
```

Code example:

```js
const { ConsoleBot } = require('bottender');
const SQLSessionStore = require('bottender-session-sql');

const bot = new ConsoleBot({
  sessionStore: new SQLSessionStore({
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'your_database_user',
      password: 'your_database_password',
      database: 'myapp_test',
    },
    migrations: {
      tableName: 'migrations',
    },
  }),
});
```

## Options

### config

Knex config.

### expiresIn

Default: `365 * 24 * 60`.

## Examples

See [examples](./examples) folder.

## License

MIT © [Yoctol](https://github.com/bottenderjs/bottender-session-sql)
