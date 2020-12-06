const express = require("express");
const { compileFunction } = require("vm");
const body= require('body-parser');

const Product = require("../models/product");

exports.adminLogin = (req, res, next) => {
  res.status(200);
  console.log("adminLogin Contollers");
};


exports.addOffer  = (req,res,next) =>{
    console.log('add offer controller');


}


exports.test = (req,res,next) =>{
  console.log('sfdgasg');
  console.log(req.body.mail);
  console.log(res.body);
}