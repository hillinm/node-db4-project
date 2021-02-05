
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Creamy Tortellini'},
        {id: 2, recipe_name: 'Honey Garlic Chicken'},
        {id: 3, recipe_name: 'Lemon Asparagus Chicken'}
      ]);
    });
};
