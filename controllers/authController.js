const userModel = require('../models/user-model');
const bcrypt= require('bcrypt')
const jwt= require('jsonwebtoken');
const {generateToken} = require("../utils/generateToken")

module.exports.authController = async function(req,res){
    try{
       let{fullname, email,password}= req.body
      let user = await userModel.findOne({email : email});
      if(user)
        return res.status(401).send("you already have an account , please login.")

        bcrypt.genSalt(10, function(err,salt){
            bcrypt.hash(password, salt , async function(err,hash){
              if(err) return res.send(err.message);
              else{
                let createdUser = await userModel.create({
            email,
            password: hash , 
            fullname,
        })
        console.log('createdUser:', createdUser);
        let token= generateToken(createdUser)
        res.cookie('token', token);
        res.send(token)
              }
            })
        })

        
        
    }catch(err){
        res.send(err.message)
    }
        

}