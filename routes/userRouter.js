const express = require('express');
const router = express.Router();
const {authController} = require("../controllers/authController")
router.get('/', function(req,res){
    res.send('hey user route is working')
})
console.log('authController is:', authController);
router.post('/register', authController)

module.exports = router;