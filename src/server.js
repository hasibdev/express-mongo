import { app } from './config/express'
import { port } from './config/vars.js'

const http = require('http')

// Server Running
const server = http.createServer(app)

server.on('listening', async function () {
   console.log(`Application running on http://localhost:${port}`)
})
server.listen(port)