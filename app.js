 require('dotenv').config()
 const {JWT_KEY} = require('./config/key')
 const express = require('express');
 const app = express();
 const multer = require('multer');
 const cookieParser = require('cookie-parser');
 const db = require('./config/mongoose-connection');
const ownersRouter = require('./routes/ownersRouter.js');
const productsRouter = require('./routes/productsRouter.js');
const userRouter = require('./routes/userRouter.js')
const index = require('./routes/index.js')
const mongoose = require('mongoose');


 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(cookieParser());
 app.set('view engine', 'ejs');

app.use('/' , index)
 app.use('/owners', ownersRouter);
 app.use('/users', userRouter);
 app.use('/products', productsRouter);

 app.get('/', (req,res)=>{
    res.send('hey Scatch Core Platform')
 });

 app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
 })