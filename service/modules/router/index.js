const express = require('express');
const router = express.Router();

const registerUser = require('../controller/create')
const loginUser = require('../controller/authentication')

router.post('/register', registerUser.RegisterUser);
router.post('/login', loginUser.LoginUser)


module.exports = router;