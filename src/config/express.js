import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const morgan = require('morgan')


import { logs } from './vars'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan(logs))
app.use(helmet())
app.use(cors())

app.get('/', (req, res) => {
   res.send('Hello world')
})

export { app }