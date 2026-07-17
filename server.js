require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')
//app
const app = express()

//connecting db
connectDB()
//middleware
app.use(express.json())
//get the server


//router
app.use('/api',require('./routers/authRoutes'))
app.use('/api/product',require('./routers/productRoutes'))
app.use('/api/midle',require('./routers/testRoutes'))
app.use('/api/cart',require('./routers/cartRoutes'))

//get server
app.get('/',(req,res)=>{
    res.send('welcome')
})
//port
const port = process.env.PORT 
//server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})