import { User } from './models/User'

const collection = User.buildUserCollection()

collection.on('change', () => {
  console.log(collection)
  console.log(collection.models[1].get('name'))
})

collection.fetch()
