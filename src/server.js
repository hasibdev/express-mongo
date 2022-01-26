import http from 'http'

import { app } from './config/express'
import mongoose from './config/mongoose'
import { port } from './config/vars.js'

// Server Running
const server = http.createServer(app)

// open mongoose connection
mongoose.connect()

server.on('listening', async function () {
   console.log(`Application running on http://localhost:${port}`)
})
server.listen(port)
