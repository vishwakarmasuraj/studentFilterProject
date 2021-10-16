const expreess = require('express')
const app = expreess()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./router')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(routes)

mongoose.connect(
    'mongodb+srv://suraj:suraj%405151@cluster0.oodet.mongodb.net/one?retryWrites=true&w=majority',
).then(() => {
    console.log('connect to db')
})

app.get('/', (req, res) => {
    res.status(200).json({msg: 'done'})
})

app.listen(3000, () => console.log(`server is listening at ${3000}`))