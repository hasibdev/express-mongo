import faker from '@faker-js/faker'
import User from "../models/User"

const seed = function () {
   const count = 10
   const users = []

   for (let u = 0; u < count; u++) {
      users.push(new User({
         firstName: faker.name.firstName,
         lastName: faker.name.lastName,
         email: faker.internet.email,
         phone: faker.phone.phoneNumber,
         password: '123456',
      }))
   }

   users.forEach(user => User.create(user))
}

export default seed
