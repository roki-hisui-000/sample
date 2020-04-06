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
const VERSION = '1.1.0'
const MSG = `ARK ${VERSION}`

app.get('/', (req, res) => {
    res.send(MSG)
})

app.listen(DEFAULT_PORT, () => {
    console.log(`--- sample start server listen: ${DEFAULT_PORT} (${VERSION})`)
})
