exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', function(table) {
      table.increments();
      table.string('first_name').notNullable();
      table.string('last_name').notNullable();
      table.string('customer_type').notNullable();
      table.string('email').notNullable();
      table.string('user_password').notNullable();
      table.string('contact_no').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
  }