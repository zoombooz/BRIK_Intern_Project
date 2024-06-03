const pool = require('./config/connection');
const { hashPassword } = require('./helpers/bcrypt');
const fs = require('fs').promises;

async function seeding(){
    try {
        let products = JSON.parse(await fs.readFile("./data/products.json", "utf-8"))
        let users = JSON.parse(await fs.readFile("./data/users.json", "utf-8"))
        let queryProducts = `
            INSERT INTO "Products"("CategoryId", "categoryName", "sku", "name", "description", "weight", "width", "length", "height", "image", "harga")
            VALUES
        `
        let processedProducts = products.map(el => {
            return `('${el.CategoryId}', '${el.categoryName}', '${el.sku}', '${el.name}', '${el.description}', '${el.weight}', '${el.width}', '${el.length}', '${el.height}', '${el.image}', '${el.harga}')`
        })
        queryProducts += processedProducts.join(",") + ";"
        let queryUsers = `
            INSERT INTO "Users"("email", "name", "password")
            VALUES
        `
        let processedUsers = users.map(el => {
            return `('${el.email}', '${el.name}', '${hashPassword(el.password)}')`
        })
        queryUsers += processedUsers.join(",") + ";"

        await pool.query(queryProducts)
        await pool.query(queryUsers)
        console.log("SEEDING SUCCEED")

    } catch (error) {
        console.log("SEEDING FAILED", error);
    }
}

seeding()