const express = require('express');
const router = express.Router();

const userController = require('../controllers/user_controller')

router.get('/',userController.user)
router.get('/login',userController.login)

module.exports = router;