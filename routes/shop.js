const express = require('express');


const shopController = require('../controllers/shopController');
const namesController = require('../controllers/namesController');
const galleryController = require('../controllers/galleryController');

const isAuth = require('../middlewares/is-auth');

const router = express.Router();

router.get('/products',shopController.getProductsController);
router.post('/order',shopController.postOrder);
router.get('/offers',shopController.getoffers);
router.get('/gallery',shopController.getGallary);
router.get('/privateGallery',shopController.getPrivateProducts);
router.get('/productsNames',namesController.getNames);
router.get('/privateProductNames',namesController.getPrivateNames);



module.exports = router;
