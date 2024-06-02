const express = require('express');

const drinkData = require('./drinkData.json');
const drinks = drinkData.drinks;
const recipes = drinkData.recipes;

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/drinks', (req,res) => {
    res.json(drinks);
});

app.listen(PORT, () => {
    console.log(`Server is running on on port ${PORT}`);
})