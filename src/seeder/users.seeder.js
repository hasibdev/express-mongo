import faker from '@faker-js/faker'
import User from "../models/User"

const seed = async function () {
   const count = 300
   const users = []
   await User.remove()

   for (let u = 0; u < count; u++) {
      users.push(User.create({
         firstName: faker.name.firstName(),
         lastName: faker.name.lastName(),
         email: faker.internet.email(),
         phone: faker.phone.phoneNumber(),
         password: '123456',
      }))
   }

   // Promise.all(users).then(() => console.log("Added All Users"))

   // users.forEach(user => )
   return Promise.all(users)
}

export default seed
