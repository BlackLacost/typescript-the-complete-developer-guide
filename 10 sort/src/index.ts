import { CharactersCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'
import { NumbersCollection } from './NumbersCollection'

const numbers = [10, 3, -5, 0]
const numbersCollection = new NumbersCollection(numbers)
numbersCollection.sort()
console.log(numbers, numbersCollection.data)

const characters = 'qweRtyr'
const charactersCollection = new CharactersCollection(characters)
charactersCollection.sort()
console.log(characters, charactersCollection.data)

const linkedList = new LinkedList()
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)

console.log('Unsorted LinkedList')
linkedList.print()
linkedList.sort()
console.log('Sorted LinkedList')
linkedList.print()
