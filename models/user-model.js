const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27107/scatch-core-platform-DB')

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: [],
    },
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
    isadmin: Boolean,
    
})


module.exports = mongoose.model('user', userSchema);