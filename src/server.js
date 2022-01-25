import { app } from './config/express'
import mongoose from './config/mongoose'
import { port } from './config/vars.js'

const http = require('http')

// open mongoose connection
mongoose.connect()

// Server Running
const server = http.createServer(app)

server.on('listening', async function () {
   console.log(`Application running on http://localhost:${port}`)
})
server.listen(port)
