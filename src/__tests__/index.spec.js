const SQLSessionStore = require('../');

jest.mock('knex');

const knexfile = {
  client: 'sqlite3',
  connection: {
    filename: './mydb.sqlite',
  },
};

function setup() {
  const store = new SQLSessionStore(knexfile);

  return {
    store,
  };
}

describe('#init', () => {
  it('should return self', async () => {
    const { store } = setup();

    expect(await store.init()).toBe(store);
  });
});
