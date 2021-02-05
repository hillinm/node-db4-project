const express = require('express');
const Recipes = require('./recipesModel.js');
const router = require('express').Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch (err => {
        res.status(500).json({message: 'failed to get data'})
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
    Recipes.getShoppingList(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch (err => {
        res.status(500).json({message: 'failed to get data'})
    })
})

router.get('/:id/directions', (req, res) => {
    const { id } = req.params;
    Recipes.getDirections(id)
    .then(list => {
        res.status(200).json(list)
    })
    .catch (err => {
        res.status(500).json({message: 'failed to get data'})
    })
})
module.exports = router; 