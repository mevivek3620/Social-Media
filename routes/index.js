const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/',homeController.home);

// for any frther routes,access fro here
router.use('/user',require('./user'));

module.exports = router;
