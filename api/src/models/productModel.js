const dbPool = require('../config/database')

const getAllProduct = () => {
    const sqlQuery = 'SELECT * FROM product'

    return dbPool.query(sqlQuery)
}

const getProductById = (id) => {
    const sqlQuery = `SELECT * FROM product WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

const createNewProduct = (body) => {
    const sqlQuery = `INSERT INTO product (name,unit,price) VALUES ('${body.name}','${body.unit}','${body.price}')`

    return dbPool.query(sqlQuery)
}

const updateProduct = (body,id)=>{
    const sqlQuery = `UPDATE product SET name='${body.name}', unit='${body.unit}',price='${body.price}' WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

const deleteProduct = (id)=>{
    const sqlQuery = `DELETE FROM product WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

module.exports = {
    getAllProduct,
    getProductById,
    createNewProduct,
    updateProduct,
    deleteProduct
}