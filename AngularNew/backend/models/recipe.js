const mongoose = require('mongoose');
const Ingredient = require('./ingredient')


const recipeSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    imagepath:{type:String},
    ingredients:{type:{nane:String,amt:Number}}
})
module.exports = mongoose.model('Recipe',recipeSchema);