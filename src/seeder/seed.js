import mongoose from "../config/mongoose"

import userSeeder from './users.seeder'

mongoose.connect()

async function run() {
   await userSeeder()

   console.log('Seed Complete')
   process.exit(0)
}

run()
