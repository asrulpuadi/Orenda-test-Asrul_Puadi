const productModel = require('../models/productModel')

const getAllProduct = async(req,res)=>{
    try {
        const [data] = await productModel.getAllProduct()
        res.json({
            message:'GET all product success',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

const getProductById = async(req,res)=>{
    try {
        const {id} = req.params
        const [data] = await productModel.getProductById(id)
        res.json({
            message:'GET product by id',
            data:data
        })
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
    }
}

const createNewProduct = async(req,res)=>{
    const {body} = req

    try {
        await productModel.createNewProduct(body)
        
        res.status(201).json({
            message:'create new product success',
            data:body
        })
        
    } catch (error) {
        res.status(500).json({
            message:'Server Error',
            serverMessage:error
        })
        
    }    
}

const updateProduct = async(req,res) => {
    const {id} = req.params
    const {body} = req

    try {
        await productModel.updateProduct(body,id)

        res.status(200).json({
            message:'update product success',
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

const deleteProduct = async(req,res) => {
    const {id} = req.params

    try {
        await productModel.deleteProduct(id)

        res.json({
            message:'DELETE product success',
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
    getAllProduct,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}