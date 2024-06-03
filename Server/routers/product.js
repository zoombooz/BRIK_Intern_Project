const express = require('express')
const router = express.Router()
const pool = require('../config/connection');

router.get('/', async (req, res) => {
    try {
        let {page} = req.query
        if(!page){
            page = 1
        }
        let query = `
            SELECT * FROM "Products" LIMIT 20 OFFSET ${20 * (page - 1)}
        `
        let {rows : products} = await pool.query(query)
        res.status(200).json({page, products})
    } catch (error) {
        console.log(error);
    }
})

router.post('/add-product', async (req, res) => {
    try {
        let {CategoryId, categoryName, sku, name, description, weight, width, length, height, image, harga} = req.body
        let query = `
            INSERT INTO "Products"("CategoryId", "categoryName", "sku", "name", "description", "weight", "width", "length", "height", "image", "harga")
            VALUES ('${CategoryId}', '${categoryName}', '${sku}', '${name}', '${description}', '${weight}', '${width}', '${length}', '${height}', '${image}', '${harga}')
        `
        let response = await pool.query(query)
        console.log(response);
        res.status(201).json({message: `Product ${name} has been added`})
    } catch (error) {
        console.log(error);
    }
})

router.get('/:id', async (req, res) => {
    try {
        let {id} = req.params
        let query = `
            SELECT * FROM "Products" WHERE id = ${id}
        `
        let {rows : product} = await pool.query(query)
        if(product.length === 0){
            throw {message : "Product not found"}
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message})
    }
    
})

router.post('/search', async (req, res) => {
    try {
        let {keyword} = req.body
        let query = `
            SELECT * FROM "Products" WHERE "name" ILIKE '%${keyword}%'
        `
        let {rows : product} = await pool.query(query)
        if(product.length === 0){
            throw {message : "Product not found"}
        }
        res.status(200).json(product)
    } catch (error) {
        console.log(error);
        res.status(404).json({message: error.message})
    }
})

module.exports = router