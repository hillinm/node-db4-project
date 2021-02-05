
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert([
        {id: 1, step: 1, directions: 'boil and chop chicken', recipe_id: 2},
        {id: 2, step: 2, directions: 'add honey and cream of mushroom soup', recipe_id: 2},
        {id: 3, step: 3, directions: 'cook for 30 minutes', recipe_id: 2}
      ]);
    });
};
