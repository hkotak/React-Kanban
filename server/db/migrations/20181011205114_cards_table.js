exports.up = function (knex, Promise) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('body', 1024).notNullable();
    table.string('priority_id').notNullable();
    table.string('status_id').notNullable();
    table.string('created_by').nullable();
    table.string('assigned_to').nullable();


    //INCORPORATE RELATIONAL DATA TABLES IN NEXT VERSION
    // table.integer('priority_id').references('id').inTable('priorities').notNullable();
    // table.integer('status_id').references('id').inTable('statuses').notNullable();
    // table.integer('assigned_to').references('id').inTable('users').nullable();

    table.timestamp('created_at').defaultTo(knex.fn.now())
    table.timestamp('updated_at').defaultTo(knex.fn.now())

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('cards')
};