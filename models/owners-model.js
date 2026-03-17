 const mongoose = require('mongoose');
 
 
 const ownerSchema = mongoose.Schema({
    fullname: {
        type: String,
        minlength: 5,
        maxlength: 12,
        trim: true,
    },
    email: String,
    password: String,
    
 })

 module.exports = mongoose.model('owner', ownerSchema);
