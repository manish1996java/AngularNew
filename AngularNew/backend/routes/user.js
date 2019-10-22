const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.post('/signup',(req,res,next)=>{

    bcrypt.hash(req.body.password,10).then((hash)=>{
        const user = new User({
            email: req.body.email,
            password: hash
        });

        user.save()
        .then((result)=>{
            res.json({
                message: "User Created",
                result: result
            })
        })
        .catch((err)=>{
            res.status(500).json({
                error:err
            })
        })
    })

}) 

router.post('/login',(req,res,next)=>{
    let userfetch;
    User.findOne({email: req.body.email})
    .then((user)=>{
        if(!user){
            return res.status(401).json({
                message: "Auth failed"
            })
        }
        userfetch = user;
        return bcrypt.compare(req.body.password,user.password);
    })
    .then((result)=>{
        if(!result){
            return res.status(401).json({
                message: "Auth failed"
            })
        }
        console.log('everythings is ok');
        
        const token = jwt.sign(
            {email: userfetch.email, userId: userfetch._id },
            "secret_this_should_be_longer",
            {expiresIn: "2h"}
            );
        // const token = jwt.sign(
        //     {email: user.email,userId: user._id},
        //     "secret_this_should_be_longer",
        //     {expiresIn:"1h"}
        //     );
        console.log('no fine here');
        res.status(200).json({
            token:token
        });
    })
    .catch((error)=>{
        res.status(401).json({
            message: "Auth failed"
        })
    })
})



module.exports = router;

