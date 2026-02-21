 const express = require('express');
 const app = express();
 const multer = require('multer');
 const cookieParser = require('cookie-parser');

 app.use(express.json());
 app.use(express.urlencoded({extended: true}));
 app.use(cookieParser());
 app.set('view engine', 'ejs');

 app.get('/', (req,res)=>{
    res.send('hey Scatch Core Platform')
 });

 app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
 })