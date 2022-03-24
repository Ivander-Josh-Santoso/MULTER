const foodsRouts = require('express').Router();
const foodsControls=require('../controls/foodsControls')
const uploadMiddleware = require("../helpers/uploadMiddleware")
const cloudinaryMiddleware = require("../helpers/cloudinaryMiddleware")

foodsRouts.get('/', foodsControls.getAll)
foodsRouts.post('/', uploadMiddleware,cloudinaryMiddleware,foodsControls.postData)

foodsRouts.put('/:id', foodsControls.editData)
foodsRouts.delete('/:id', foodsControls.delete)

module.exports = foodsRouts