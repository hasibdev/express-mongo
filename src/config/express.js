const morgan = require('morgan')
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import apiRoutes from '../routes/api'

import { logs } from './vars'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan(logs))
app.use(helmet())
app.use(cors())

app.use('/api', apiRoutes)

export { app }