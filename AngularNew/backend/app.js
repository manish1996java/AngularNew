const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const Recipe = require('./models/recipe');
const Ingredient = require('./models/ingredient');
const userRoute = require('./routes/user');
const bodyparser = require('body-parser');
const rootDir = require('./utils/path');


const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(path.join(rootDir,'backend','public')));



mongoose.connect("mongodb+srv://Manish:Dhit5XS0y7FEp1I4@cluster0-puvlp.mongodb.net/node-angulaer?retryWrites=true&w=majority",{ useNewUrlParser: true })
    .then(()=>{
        console.log('connected to database!');
    }).catch((error)=>{
        console.log(error,"connection failed");
    });

app.use((req,res,next)=>{
    console.log("set Header work");
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, content-type, Accept ,Authorization");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");
    next(); 
})

app.use('/api/user',userRoute);
app.get('/api/recipe',(req,res,next)=>{
    // const recipe = new Recipe({
    //     title: '';
    // });
    const recipe = [
        {name:'pasta',description:'pasta is so tasty',imagepath:'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',ingredients:[{name:'coco',amt:3},{name:'momo',amt:3}]},
        {name:'spring roll',description:'spring roll is very tasty',imagepath:'https://www.whiskaffair.com/wp-content/uploads/2015/06/Spring-Roll-5-500x500.jpg',ingredients:[{name:'coco',amt:3},{name:'momo',amt:3}]},
        {name:'burger',description:'cheeze berger is so tasty',imagepath:'https://www.seriouseats.com/recipes/images/2015/07/20150702-sous-vide-hamburger-anova-primary-1500x1125.jpg',ingredients:[{name:'coco',amt:3},{name:'momo',amt:3}]},
        {name:'chicken',description:'chicken leg is so timagepath:aimagepath:sty',imagepath:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg',ingredients:[{name:'coco',amt:3},{name:'momo',amt:3}]},
        {name:'chicken',description:'chicken leg is so timagepath:aimagepath:sty',imagepath:'https://www.tasteofhome.com/wp-content/uploads/2018/01/Crispy-Fried-Chicken_EXPS_FRBZ19_6445_C01_31_3b.jpg',ingredients:[{name:'coco',amt:3},{name:'momo',amt:3}]}
      ]
    Recipe.find()
    .then((post)=>{
        console.log(post)
    })
    .catch(()=>{
        console.log('error');
    });
    res.status(200).json({
        message: 'successfull get the recipe',
        recipes: recipe,
    });
})

app.get('/api/ingredient',(req,res,next)=>{
    // const ingredient = [{name:'allo',decription:'pizza is very cheezy today'},{name:'bread',decription:'pizza is very cheezy today'},{name:'pizza',decription:'pizza is very cheezy today'}];
    
    
    const recipe = new Recipe({
        name: 'allo',
        description: 'allo as fries',
        imagepath: 'lhkhkjlhkljhlkhkhk',
        ingredients: [{
            name: 'aklkl',
            amt: 90,
        }],

    })
    recipe.save().then(()=>{
        console.log('save successfully');
    });
    res.json(recipe);

})

module.exports = app;