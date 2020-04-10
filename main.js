/*
 *samplle repository
 */

// modules
//const http = require('http')
const express = require('express')
const httpStatus = require('http-status-codes')

const app = express()

// constant
const DEFAULT_PORT = process.env.PORT || 3000
const VERSION = '1.1.1'
const MSG = `ARK ${VERSION}`

// use template
app.set('view engine', 'ejs')

// URLエンコードされたデータを解析
app.use(
    express.urlencoded({
        extended: false
    })
)


app.get('/', (req, res) => {
//    res.send(MSG)
    res.render('index')
})

app.get('/message', (req,res) => {
    const msg = `receive message:${req.query.msg}`
    console.log(msg)
    res.send(msg)
})

app.get('/info', (req, res) => {
    res.send('access "/info" path')
})


app.listen(DEFAULT_PORT, () => {
    console.log(`--- sample start server listen: ${DEFAULT_PORT} (${VERSION})`)
})
