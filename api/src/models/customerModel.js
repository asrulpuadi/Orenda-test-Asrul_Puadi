const dbPool = require('../config/database')

const getAllCustomer = () => {
    const sqlQuery = 'SELECT * FROM customer'

    return dbPool.query(sqlQuery)
}

const getCustomerById = (id) => {
    const sqlQuery = `SELECT * FROM customer WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

const createNewCustomer = (body) => {
    const sqlQuery = `INSERT INTO customer (name,phone,email,address) VALUES ('${body.name}','${body.phone}','${body.email}','${body.address}')`

    return dbPool.query(sqlQuery)
}

const updateCustomer = (body,id)=>{
    const sqlQuery = `UPDATE customer SET name='${body.name}', phone='${body.phone}',email='${body.email}',address='${body.address}' WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

const deleteCustomer = (id)=>{
    const sqlQuery = `DELETE FROM customer WHERE id=${id}`

    return dbPool.query(sqlQuery)
}

module.exports = {
    getAllCustomer,
    getCustomerById,
    createNewCustomer,
    updateCustomer,
    deleteCustomer
}