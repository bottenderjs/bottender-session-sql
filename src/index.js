const knex = require('knex');

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

module.exports = class SQLSessionStore {
  constructor(config, expiresIn) {
    this._knex = knex(config);
    this._expiresIn = expiresIn || MINUTES_IN_ONE_YEAR;
  }

  async init() {
    return this;
  }

  async read(key) {
    const row = await this._knex('sessions')
      .where('id', key)
      .select();

    return row ? JSON.parse(row.session) : null;
  }

  async write(key, sess) {
    await this._knex('sessions')
      .where('id', key)
      .update({ session: JSON.stringify(sess) })
      .catch(() =>
        this._knex('sessions').insert({
          id: key,
          session: JSON.stringify(sess),
        })
      );
  }

  async destroy(key) {
    await this._knex('sessions')
      .where('id', key)
      .del(key);
  }
};
