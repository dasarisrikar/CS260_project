// moye.js

const express = require('express');
const authControl = require('../controllers/moye');
//to go a level up
const router = express.Router();

router.post('/signin', authControl.signin);


module.exports = router;
