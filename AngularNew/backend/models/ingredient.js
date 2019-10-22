const mongoose = require('mongoose');

const ingredientSchema = mongoose.Schema({
    name:{type:String},
    amt:{type:Number},
})

module.exports = mongoose.model('Ingredient',ingredientSchema);