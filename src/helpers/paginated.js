export default async function (Model) {
   try {
      const data = await Model.find()
      return Promise.resolve(data)
   } catch (error) {
      return Promise.reject(error)
   }
}
