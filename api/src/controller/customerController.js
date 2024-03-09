const customerModel = require('../models/customerModel')

const getAllCustomer = async(req,res)=>{
    try {
        const [data] = await customerModel.getAllCustomer()
        res.json({
            message:'GET all customer success',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

const getCustomerById = async(req,res)=>{
    try {
        const {id} = req.params
        const [data] = await customerModel.getCustomerById(id)
        res.json({
            message:'GET customer by id',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

const createNewCustomer = async(req,res)=>{
    const {body} = req

    try {
        await customerModel.createNewCustomer(body)
        
        res.status(201).json({
            message:'create new customer success',
            data:body
        })
        
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
        
    }    
}

const updateCustomer = async(req,res) => {
    const {id} = req.params
    const {body} = req

    try {
        await customerModel.updateCustomer(body,id)

        res.status(200).json({
            message:'update customer success',
            data:{
                id:id,
                ...body
            }
        })
        
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

const deleteCustomer = async(req,res) => {
    const {id} = req.params

    try {
        await customerModel.deleteCustomer(id)

        res.json({
            message:'DELETE customer success',
            data:null
        })
        
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

module.exports = {
    getAllCustomer,
    getCustomerById,
    createNewCustomer,
    updateCustomer,
    deleteCustomer
}