const mongoose = require('mongoose');
const debug = require('debug')('development: db');
const debugError = require('debug')('development:err')
const config = require('config')

mongoose.connect(`${config.get("MONGODB_URI")}/sactch-core-platform-DB`)
.then(()=>{
   debug('connected to database successfully');
}).catch((err)=>{
    debugError(err);
})

module.exports = mongoose.connection;
