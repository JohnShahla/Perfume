const express = require('express');
const { isValidObjectId } = require('mongoose');
const ObjectId = require('mongodb').ObjectID;


const gallery = require('../models/gallery');
const product = require('../models/product');



exports.addImg = (req,res,next) =>{
    console.log('addimg controller');
    const imgURL = req.body.imgURL;
    const name = req.body.name;
    const gallery = new Gallery({
        imgURL :imgURL,
        name:name
    }); 
    gallery.save().then(gallery =>{
        console.log(gallery);
        res.status(200).send('sucess');
    }).catch(err =>{
        console.log(err)
        res.status(400);
    })

}
exports.deleteIMG = (req,res,next) =>{
    const id =req.body._id;
    const name = req.body.name;
    console.log('asf');

    product.findByIdAndRemove(id,(err,docs)=>{
        console.log(err,docs);


    })
        // .then(result=>{
        //     console.log(id,result);
        //     res.status(200).send('deleted Imgae');

        // }).catch(err=>{
        //     console.log(err);
        //     res.status(400).send("error deleting image, Check Console");
        //         })
        


}
