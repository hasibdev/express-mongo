import faker from '@faker-js/faker'
import Category from "../models/Category"

const seed = async function () {
   const count = 10
   const users = []
   await Category.remove()

   for (let u = 0; u < count; u++) {
      users.push(Category.create({
         name: faker.commerce.productName(),
         description: faker.commerce.productDescription()
      }))
   }

   // Promise.all(users).then(() => console.log("Added All Users"))

   // users.forEach(user => )
   return Promise.all(users)
}

export default seed
