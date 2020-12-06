
const express = require("express");

const Product = require("../models/product");




exports.addProduct = (req, res, next) => {
    let name = req.body.name;
    let price = req.body.price;
    let discription = req.body.discription;
    let number; // get the last number in the db
    console.log('--------------------------',req.body);
    const product = new Product({
      name: name,
      price: price,
      discription: discription,
      number: 1,
    });
    product.save().then(result => {
      console.log("created");
      res.status(201);
    }).catch(err=>{
      res.status(400);
      console.log(err);
    });
    console.log("addProduct Controller");
  };

  exports.modifyProduct = (req, res, next) => {
    console.log("modify products");
    const name = req.body.name;

  };
  exports.deleteProduct = (req, res, next) => {
    console.log("delete product controller");
    // const name = req.body.name;
    // Product.findOneAndDelete({name:name}).
    //   then(result => {
    //   console.log("created");
    //   res.status(201);
    // }).catch(err=>{
    //   res.status(400);
    //   console.log(err);
    // });
    // console.log("addProduct Controller"); 

  };