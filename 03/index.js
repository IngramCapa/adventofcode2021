const fs = require('fs')
const binaryStrings = fs.readFileSync('./03/data.txt').toString().split('\n')

const modeledResult = [
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
  { 0: 0, 1: 0 },
]
const nestedData = binaryStrings.map((string) => string.split(''))

const innerReducer = (acc, currentValue, index) => {
  const elementInAcc = acc[index]
  const newElemInAcc = {
    ...elementInAcc,
    [currentValue]: elementInAcc[currentValue] + 1,
  }
  acc[index] = newElemInAcc
  return acc
}

const outerReducer = (acc, currentValue) => {
  return currentValue.reduce(innerReducer, acc)
}

const result = nestedData.reduce(outerReducer, modeledResult)

const binaryGammaRate = result
  .map(({ 0: zero, 1: one }) => {
    return zero > one ? 0 : 1
  })
  .join('')

const binaryEpsilonRate = result
  .map(({ 0: zero, 1: one }) => {
    return zero > one ? 1 : 0
  })
  .join('')

const gammaRate = parseInt(binaryGammaRate, 2)
const epsilonRate = parseInt(binaryEpsilonRate, 2)

const powerConsumption = gammaRate * epsilonRate
