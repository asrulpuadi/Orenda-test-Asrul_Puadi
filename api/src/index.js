require('dotenv').config()

const PORT = process.env.PORT || 5000

const express = require('express')
const app = express()
const cors = require('cors')
const customerRoutes = require('./routes/customer.js')
const productRoutes = require('./routes/product.js')
const logRequest =  require('./middleware/logs.js')

app.use(cors())
app.use(logRequest.logRequest)
app.use(express.json())

app.use('/customer',customerRoutes)
app.use('/product',productRoutes)

app.listen(PORT,()=>{
    console.log(`Running server port ${PORT}`);
})