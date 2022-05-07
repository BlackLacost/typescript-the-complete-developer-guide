class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index]
  }
}

const arr = new ArrayOfAnything(['a', 'b', 'c'])

// Example of generics with functions

function printStrings(arr: string[]): void {
  arr.forEach((item) => {
    console.log(item)
  })
}

function printNumbers(arr: number[]) {
  arr.forEach((item) => {
    console.log(item)
  })
}

function printAnything<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(item)
  })
}

printAnything(['one', 'two', 'three'])

// Generic Contraints

class Car {
  print() {
    console.log('I am a car')
  }
}

class House {
  print() {
    console.log('I am a house')
  }
}

interface Printable {
  print(): void
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
  arr.forEach((item) => {
    item.print()
  })
}

printHousesOrCars([new House(), new Car()])
