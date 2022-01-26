import faker from '@faker-js/faker'
import User from "../models/User"

const seed = async function () {
   const count = 10
   const users = []

   for (let u = 0; u < count; u++) {
      users.push(new User({
         firstName: faker.name.firstName(),
         lastName: faker.name.lastName(),
         email: faker.internet.email(),
         phone: faker.phone.phoneNumber(),
         password: '123456',
      }))
   }

   await User.remove()
   for (const user of users) {
      await User.create(user)
   }
   // users.forEach(user => )
   return Promise.resolve()
}

export default seed
