const knex = require('knex');

const MINUTES_IN_ONE_YEAR = 365 * 24 * 60;

export default class SQLSessionStore {
  constructor(config, expiresIn) {
    this._knex = knex(config);
    this._expiresIn = expiresIn || MINUTES_IN_ONE_YEAR;
  }

  async init() {
    return this;
  }

  async read(key) {
    return this._knex('sessions')
      .where('id', key)
      .select();
  }

  async write(key, sess) {
    this._knex('sessions')
      .where('id', key)
      .update({ session: sess })
      .catch(() => {
        this._knex('sessions').insert({ id: key, session: sess });
      });
  }

  async destroy(key) {
    this._knex('sessions')
      .where('id', key)
      .del(key);
  }
}
