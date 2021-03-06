import mongoose from 'mongoose'
import logger from './logger'
import { mongo, env } from './vars'

// Exit application on error
mongoose.connection.on('error', (err) => {
   logger.error(`MongoDB connection error: ${err}`)
   process.exit(-1)
})

// print mongoose logs in dev env
if (env === 'development') {
   mongoose.set('debug', true)
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
const connect = () => {
   mongoose
      .connect(mongo.uri, {
         keepAlive: 1,
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      .then(() => console.log('mongoDB connected...'))
   return mongoose.connection
}

export default { connect }
