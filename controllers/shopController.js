const express = require('express');

const gallery = require('../models/gallery');
const Order = require('../models/order');
const product = require('../models/product');

exports.getProductsController = (req,res,next) =>{
    res.status(200);
    console.log('product controller here');
}
exports.postOrder = (req,res,next) =>{
    res.status(200);
    console.log('post order');
    let country = req.body.country;
    let province = req.body.province;
    let name = req.body.name;
    let zip = req.body.zip;
    let additionalInfo = req.body.additionalInfo;
    let phoneNumber = req.body.phoneNumber;
    const order = new Order({
        country:country,
        province : province,
        name : name,
        zip : zip,
        additionalInfo : additionalInfo,
        phoneNumber: phoneNumber
    });
    order.save().then(order =>{
        console.log(order);
        res.status(200);
    }).catch(err => {
        console.log(err);
        res.status(400);
    });

}
exports.getoffers = (req,res,next) =>{
    console.log('offers controllers');
}
exports.getPrivateProducts = (req,res,next) => {
    console.log('private collection controller');
}
exports.getGallary= (req,res,next) =>{
    console.log('gallery controller here');
    gallery.find().then(gallery => {
        res.status(200).send(gallery);
        console.log(gallery);
    }).catch(err =>{
        console.log(err);
        res.status(400);
    })
}