import { User } from './models/User'

const user = new User({ id: 1, name: 'newer name', age: 0 })

user.on('save', () => console.log(user))
// user.on('change', () => console.log('change1'))
// user.trigger('change')

user.save()

// Reminer on how 'this' works in javascript
