const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const router = require('./routers');

app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
    console.clear()
    console.log(`Example app listening on port ${port}`)
})