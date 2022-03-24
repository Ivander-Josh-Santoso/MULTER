const authRouts = require('express').Router();
const authControls= require('../controls/authControls');
const foodsControls = require('../controls/foodsControls');

authRouts.post('/sign-in',authControls.signin)
authRouts.post('/sign-up',authControls.signup, foodsControls.postData)
module.exports = authRouts