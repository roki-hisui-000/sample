/*
 *samplle repository
 */

// modules
const http = require('http')
// constant
const DEFAULT_PORT = process.env.port || 3000


const app = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type' : 'text/html'
    })

    res.write('ARK')
    res.end()

    console.log('receive request')
})

app.listen(DEFAULT_PORT)

console.log('start server')