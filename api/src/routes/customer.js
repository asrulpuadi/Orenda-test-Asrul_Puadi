const express = require('express')
const router = express.Router()
const customerController = require('../controller/customerController')

var cors = require('cors')

//get all customer
router.get('/',cors(),customerController.getAllCustomer)

//get by id
router.get('/:id',customerController.getCustomerById)

//create new customer
router.post('/',customerController.createNewCustomer)

//update customer
router.patch('/:id',customerController.updateCustomer)

//delete customer
router.delete('/:id',customerController.deleteCustomer)

module.exports = router