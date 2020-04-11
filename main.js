/*
 *samplle repository
 */

// modules
//const http = require('http')
const express = require('express')
const httpStatus = require('http-status-codes')
const mongoose = require('mongoose')

//const defaultController = require('./controllers/defaultController')
//const defaultUtils = require('./utils/defaultUtils')
const router = require('./routes/index')

// constant
const DEFAULT_PORT = process.env.PORT || 3000
const DEFAULT_TOKEN = 'recipe000'
const LOCA_DATABASE = 'mongodb://localhost:27017/master01'
const VERSION = '1.1.2'

const app = express()

// connect to mongodb
/*
mongoose.Promise = global.Promise
mongoose.connect(
    process.env.MONGODB_URL || LOCA_DATABASE,
    {useNewUrlParser: true}
)
const db = mongoose.connection
db.once('open', () => {
    console.log('--- connection mongodb by mongoose')
})
*/

// use template
app.set('view engine', 'ejs')

// URLエンコードされたデータを解析
app.use(
    express.urlencoded({
        extended: false
    })
)

// set router
app.use('/', router)


app.listen(DEFAULT_PORT, () => {
    console.log(`--- sample start server listen: ${DEFAULT_PORT} (${VERSION})`)
})
