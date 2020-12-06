const express = require('express');

const Order = require('../models/order');



exports.getOrders = (req,res,next) =>{
    console.log('get orders controller');
    Order.find().then(orders => {
        console.log(orders);
        res.status(200).send(orders.json);
    }).catch(err=>{
        console.log(err);


    });

}

exports.modifyOrders = (req,res,next) =>{
    console.log('modify orders here');
}


exports.deleteOrders = (req,res,next) =>{
    console.log('delete Orders controller');

}