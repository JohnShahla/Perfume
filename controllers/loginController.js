const express = require('express');
const bcrypt = require('bcrypt');
const tk = require('jsonwebtoken');


const admin = require('../models/admin');


const saltRounds = 10;
const myPlaintextPassword = `s0/\/\P4$$w0rDasfd`;
const someOtherPlaintextPassword = 'not_bacon';



exports.login = (req,res,next) =>{
    console.log('login controller ');
    const userName = req.body.name.toString();
    const pass = req.body.pass;
    console.log(userName);
    let loadedUser;
    admin.findOne({userName:userName})
        .then(user =>{
            console.log(user)
            if(!user){
                const error = new Error("Name could not be Found");
                error.statusCode = 401;
                throw error;
            }
            loadedUser = user;
            

            return pass===user.pass;//bcrypt.compare(pass,user.pass);

        })
        .then(isEqual =>{
            if(!isEqual){
                


            const error = new Error("Wrong Passweord");
            error.statusCode = 401;
            throw error;
            }
            console.log('sdfsdfsdf');
            const token = tk.sign({userName: loadedUser.userName, userId: loadedUser._id.toString()},myPlaintextPassword,{expiresIn: '1h'});
            res.status(200).json({token: token, userId: loadedUser._id.toString()});
        })


        
        
        .catch(err =>{
            if (!err.statusCode){
                err.statusCode = 500;
            }
            next(err);
        });


};