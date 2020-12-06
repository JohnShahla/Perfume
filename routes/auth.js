const express = require('express');

const loginContoller = require('../controllers/loginController');


const router = express.Router();

router.post('/login',loginContoller.login);



module.exports = router;