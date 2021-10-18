const expreess = require('express')
const app = expreess()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./router')
require('dotenv').config()
const port = process.env.PORT


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(routes)

mongoose.connect(
    process.env.DATABASE_CONNECTION
).then(() => {
    console.log('connect to db')
})

app.listen(process.env.PORT, ()=> console.log(`server is listening at ${port}`))