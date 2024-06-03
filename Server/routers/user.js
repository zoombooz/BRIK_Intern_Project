const express = require('express')
const pool = require('../config/connection')
const { comparePassword } = require('../helpers/bcrypt')
const router = express.Router()

router.post('/login', async (req, res) => {
    try {
        const {email, password} = req.body
        if(!email || !password){
            throw {message : "Invalid Email/Password"}
        }
        let query = `
            SELECT * FROM "Users" WHERE "email" = '${email}'
        `
        let {rows} = await pool.query(query)
        let user = rows[0]
        if(!user || !comparePassword(password, user?.password)){
            res.status(400).json({message : "Invalid Email/Password"})
        }else{
            res.status(200).json(user)
        }
    } catch (error) {
        console.log(error);
        if(error.message === "Invalid Email/Password"){
            res.status(400).json({message : error.message})
        }
    }
})

router.post('/register', async (req, res) => {
    try {
        const {name, email, password} = req.body
        if(!name || !email || !password){
            return res.status(400).json({message : "Please fill all form"})
        }
        let query = `
            INSERT INTO "Users"("email", "name", "password")
            VALUES ('${email}', '${name}', '${password}')
        `
        await pool.query(query)
        res.status(201).json({message : "Account has been created"})
    } catch (error) {
        console.log(error);
        if(error.message === "duplicate key value violates unique constraint \"Users_email_key\""){
            res.status(400).json({message : "Email has been used"})
        }
    }
})

module.exports = router