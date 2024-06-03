const express = require('express')
const router = express.Router()
const productRouter = require('./product');
const userRouter = require('./user');

router.get('/', (req, res) => {
    res.send('Hello World!')
})

router.use('/products', productRouter)
router.use('/user', userRouter)

module.exports = router