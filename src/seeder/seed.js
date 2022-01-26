import mongoose from "../config/mongoose"

import userSeeder from './users.seeder'

mongoose.connect()

userSeeder()
