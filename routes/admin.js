const express = require('express');


const adminController = require('../controllers/adminController');
const OrdersController = require('../controllers/OrdersController');
const GalleryController = require('../controllers/GalleryController');
const productController = require('../controllers/productController');


const isAuth = require('../middlewares/is-auth');

const router = express.Router();


router.post('/product',isAuth,productController.addProduct);
router.delete('/product',isAuth,productController.deleteProduct);
router.put('/product',isAuth,productController.modifyProduct);

router.get('/orders',OrdersController.getOrders);
router.put('/modifyOrder',OrdersController.modifyOrders);
router.delete('/deleteOrder',OrdersController.deleteOrders);
router.post('/addOffer',adminController.addOffer);

router.delete('/gallery',GalleryController.deleteIMG);
router.post('/gallery',GalleryController.addImg);

router.get('/qwerty',adminController.test);


module.exports = router;