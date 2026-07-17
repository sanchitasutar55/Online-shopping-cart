const express = require('express')

const authMiddleware = require('../middleware/authMiddleware')
const adminMiddleware = require('../middleware/adminMiddleware')
const { getProducts, addProduct, deleteProduct, updateProducts } = require('../controllers/productController')

const router = express.Router()
router.post('/addproduct',authMiddleware,adminMiddleware,addProduct)
router.get('/getproduct',getProducts)
router.delete('/deleteproduct/:id',authMiddleware,adminMiddleware,deleteProduct)
router.put('/updateproduct/:id',updateProducts)

module.exports = router
