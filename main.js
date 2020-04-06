/*
 *samplle repository
 */

// modules
const http = require('http')
const httpStatus = require('http-status-codes')

// constant
const DEFAULT_PORT = process.env.PORT || 3000
const VERSION = '1.0.1'


const app = http.createServer((req, res) => {

    res.writeHead(httpStatus.OK, {
        'Content-Type' : 'text/html'
    })

    res.write(`ARK ${VERSION}`)
    res.end()

    console.log('receive request')
})

app.listen(DEFAULT_PORT)

console.log(`--- sample start server listen: ${DEFAULT_PORT} (${VERSION})`)
