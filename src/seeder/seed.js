import mongoose from "../config/mongoose"

import userSeeder from './users.seeder'
import categorySeeder from './categories.seeder'

mongoose.connect()

async function run() {
   await userSeeder()
   await categorySeeder()

   console.log('Seed Complete')
   process.exit(0)
}

run()
