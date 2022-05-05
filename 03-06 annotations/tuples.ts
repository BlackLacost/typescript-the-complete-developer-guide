const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
}

const pepsi: [string, boolean, number] = ['brown', true, 40]

// Type alias
type Drink = [string, boolean, number]

const coca: Drink = ['black', true, 60]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['green', false, 0]
