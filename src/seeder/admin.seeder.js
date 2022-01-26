import readline from 'readline'
import { validateEmail } from '../helpers/helpers'
import Admin from '../models/Admin'
import mongoose from '../config/mongoose'


const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('First Name: ', firstName => {
   rl.question('Last Name: ', lastName => {
      rl.question('Email: ', email => {
         rl.question('Password: ', password => {
            rl.question('Confirm Password: ', async confirmedPassword => {
               if (password.length < 5) {
                  console.log("Password must have to be 6 character long!")
                  console.log('Operation Fail!')
                  return rl.close()
               }

               if (password !== confirmedPassword) {
                  console.log("Password Doesn't match")
                  console.log('Operation Fail!')
                  return rl.close()
               }

               if (!validateEmail(email)) {
                  console.log("Please enter a valid Email Address!")
                  console.log('Operation Fail!')
                  return rl.close()
               }

               mongoose.connect()
               try {
                  await Admin.create({ firstName, lastName, email, password })
                  console.log('Operation Complete!')
               } catch (error) {
                  console.log('Operation Fail!')
                  console.log(error.message)
               } finally {
                  process.exit(0)
                  // return rl.close()
               }

            })
         })
      })
   })
})

