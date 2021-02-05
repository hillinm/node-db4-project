
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, ingredient: 'chicken', quantity: 1, quantity_measurement: 'breast', recipe_id: 2},
        {id: 2, ingredient: 'honey', quantity: 2, quantity_measurement: 'tablespoon', recipe_id: 2},
        {id: 3, ingredient: 'water', quantity: 1, quantity_measurement: 'cup', recipe_id: 2},
        {id: 4, ingredient: 'cream of mushroom soup', quantity: 1, quantity_measurement: 'can', recipe_id: 2}
      ]);
    });
};
