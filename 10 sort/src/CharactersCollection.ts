import { Sorter } from './Sorter'

export class CharactersCollection extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].localeCompare(this.data[rightIndex]) === 1
      ? true
      : false
  }

  swap(leftIndex: number, rightIndex: number): void {
    let characters = this.data.split('')

    const leftHand = characters[leftIndex]
    characters[leftIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand

    this.data = characters.join('')
  }
}
