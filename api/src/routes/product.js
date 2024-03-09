const express = require('express')
const router = express.Router()
const productController = require('../controller/productController')

//get all product
router.get('/',productController.getAllProduct)

//get by id
router.get('/:id',productController.getProductById)

//create new product
router.post('/',productController.createNewProduct)

//update product
router.patch('/:id',productController.updateProduct)

//delete product
router.delete('/:id',productController.deleteProduct)

module.exports = router