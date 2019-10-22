const mongoose = require('mongoose');
const mongooseValidator = require('mongoose-unique-validator');

mongoose.plugin(mongooseValidator);

const userSchema = mongoose.Schema({
    email: {type:String,require:true,unique:true},
    password: {type:String,require:true},
})

userSchema.plugin(mongooseValidator);

module.exports = mongoose.model('User',userSchema);