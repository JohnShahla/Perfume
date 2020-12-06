//import core moduls requiring




//////end of import core moduls requiring


//import 3rd party moduls requiring 

const express = require('express');
const mongo = require('mongoose');
const bodyparser = require('body-parser');

//////end of import 3rd party moduls requiring


//import local files 


const shopRoutes = require('./routes/shop');
const adminRoutes = require('./routes/admin');
const authRoutes = require('./routes/auth');

//////end of import local


//start of server
const app = express();

app.use(bodyparser.json());
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Origin','Content-Type,Authorization');
    console.log('------------------------------------',req.body);
    next();

});
//routes
app.use(authRoutes);
app.use('/admin',adminRoutes);
app.use(shopRoutes);


mongo.connect('').then(results =>{
    app.listen(8080);
    //console.log(results);

}).catch(err => {
    console.log(err);
})


//////end of server