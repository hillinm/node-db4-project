const db = require('../data/db-config.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getDirections
}

function getRecipes() {
    return db('recipes')
}

function getShoppingList(recipe_id) {
    return db('ingredients as i')
    .select('i.ingredient', 'i.quantity')
    .where({recipe_id})
}

function getDirections(recipe_id) {
    return db('steps')
    .join('recipes','recipes.id', 'steps.recipe_id')
    .select('*')
    .where({recipe_id})
    .orderBy('steps.step')
}