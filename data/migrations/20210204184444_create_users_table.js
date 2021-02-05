
exports.up = function(knex) {
  return knex.schema
  .createTable('recipes', table => {
      table.increments();
      table.string('recipe_name', 255).notNullable().unique();
  })
  .createTable('ingredients', table => {
      table.increments();
      table.string('ingredient').notNullable();
      table.float('quantity').notNullable();
      table.string('quantity_measurement').notNullable();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
  .createTable('recipe_steps', table => {
      table.increments();
      table.integer('step').unsigned().notNullable();
      table.text('directions').notNullable();
      table.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
  })
};

exports.down = function(knex) {
  return knex.schema
 .dropTableIfExists('recipe_steps')
 .dropTableIfExists('ingredients')
 .dropTableIfExists('recipes')
};
