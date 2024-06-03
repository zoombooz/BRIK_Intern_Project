const pool = require('./config/connection');

async function migration(){
    try {
        const dropTableQuery = `
            DROP TABLE IF EXISTS "Products";
            DROP TABLE IF EXISTS "Users";
        `
        await pool.query(dropTableQuery)
        const tableProductQuery = `
            CREATE TABLE "Products"(
                "id" SERIAL PRIMARY KEY,
                "CategoryId" INTEGER NOT NULL,
                "categoryName" VARCHAR(20) NOT NULL,
                "sku" VARCHAR NOT NULL,
                "name" VARCHAR(20) NOT NULL,
                "description" VARCHAR(100) NOT NULL,
                "weight" INTEGER NOT NULL,
                "width" INTEGER NOT NULL,
                "length" INTEGER NOT NULL,
                "height" INTEGER NOT NULL,
                "image" VARCHAR NOT NULL,
                "harga" INTEGER NOT NULL
            );
        `
        const tableUserQuery = `
            CREATE TABLE "Users"(
                "id" SERIAL PRIMARY KEY,
                "email" VARCHAR(50) UNIQUE NOT NULL,
                "name" VARCHAR(50) NOT NULL,
                "password" VARCHAR NOT NULL
            )
        `
        await pool.query(tableProductQuery)
        await pool.query(tableUserQuery)
        console.log("MIGRATION SUCCEED")
    } catch (error) {
        console.log("MIGRATION FAILED", error)
    }
}

migration()