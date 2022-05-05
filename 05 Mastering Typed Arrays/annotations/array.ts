const carMakers: string[] = []

const carMakers2 = ['ford', 'toyota', 'chevy']

const dates = [new Date(), new Date()]

const carsByMake = [['f150'], ['corlla'], ['camaro']]

// Help with inference when extracting
const car = carMakers[0]

// Flexible types
const importantDates = [new Date(), '2030-10-10']

const importantDates2: (Date | string)[] = [new Date()]
importantDates2.push('2030-12-31')
