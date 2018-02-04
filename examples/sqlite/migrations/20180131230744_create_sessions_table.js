exports.up = function(knex) {
  return knex.schema.createTable('sessions', table => {
    table
      .string('id')
      .notNullable()
      .primary();
    table.text('session').notNullable();
    table.timestamps(false, true); // [useTimestamps], [defaultToNow]
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sessions');
};
