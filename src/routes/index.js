const mainRouts = require('express').Router();
const authRoutes = require('./authRoutes');
const foodsRouts = require('./foodsRouts');

mainRouts.use('/foods', foodsRouts);
mainRouts.use('/auth', authRoutes)

module.exports= mainRouts;