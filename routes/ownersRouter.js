const express = require('express');
const router = express.Router();
const ownerModel= require('../models/owners-model.js')



console.log(process.env.NODE_ENV)
router.get('/', function(req,res){
    res.send('hey owners route is working')
});


if(process.env.NODE_ENV==="development"){
    router.post('/create', async function(req,res){
let owner= await ownerModel.find()
if(owner.length>0){
    return res.status(500).send('you are not allowed to create a owner')
}
let {fullname,email,password} = req.body
let createdOwner= await ownerModel.create({
 fullname,
 email,
 password,
})
       return res.status(201).send(createdOwner)
    })
}

module.exports = router;
