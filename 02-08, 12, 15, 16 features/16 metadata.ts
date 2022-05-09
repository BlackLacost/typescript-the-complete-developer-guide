import 'reflect-metadata'

// const plane = {
//   color: 'red',
// }

// Reflect.defineMetadata('note', 'hi there', plane)
// Reflect.defineMetadata('height', 10, plane)

// const note = Reflect.getMetadata('note', plane)
// const height = Reflect.getMetadata('height', plane)

// console.log(note)
// console.log(height)

// Reflect.defineMetadata('note', 'hi there', plane, 'color')
// const note = Reflect.getMetadata('note', plane, 'color')
// console.log(note)

@printMetadata
class Plane {
  color: string = 'red'

  @markFunction('HI THERE')
  fly(): void {
    console.log('vrrrrr')
  }

  @markFunction('Next secret')
  test(): void {
    console.log('test')
  }

  @get('/login')
  getLogin(): void {
    console.log('login')
  }
}

function markFunction(secretInfo: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('secret', secretInfo, target, key)
  }
}

// const secret = Reflect.getMetadata('secret', Plane.prototype, 'fly')
// console.log(secret)

function printMetadata(target: typeof Plane) {
  for (let key in target.prototype) {
    const secret = Reflect.getMetadata('secret', target.prototype, key)
    console.log(`Secret: ${secret} for method ${key}`)
  }
}

function get(path: string) {
  return function (target: any, key: string) {
    Reflect.defineMetadata('secret', path, target, key)
  }
}
