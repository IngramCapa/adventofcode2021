const { depthArray } = require('./data')

//Solution 1, part 2

const countIncreases = (acc, currentValue, index, array) => {

  if (index < 3) return acc
  const prevValue = array[index - 3]
  return currentValue > prevValue ? acc + 1 : acc
}
const calculateIncreases = () => {
  return depthArray.reduce(countIncreases, 0)
}

// Solution 2, part 1- reducer

const countIncreases = (acc, currentValue, index, array) => {
  if (index === 0) return acc
  const prevValue = array[index - 1]
  return currentValue > prevValue ? acc + 1 : acc
}
const calculateIncreases = () => {
  return depthArray.reduce(countIncreases, 0)
}

// Solution 1, part 1

// const callbackFn = (currentValue, i, array) => {
//   if (i === 0) return 'N/A'
//   const prevValue = array[i - 1]
//   return currentValue > prevValue ? 'increase' : 'decrease'
// }

// const countIncreases = (acc, it) => {
//   if (it === 'increase') {
//     return acc + 1
//   }
//   return acc
// }
// const calculateIncreases = () => {
//   const comparisonArray = depthArray.map(callbackFn)
//   return comparisonArray.reduce(countIncreases, 0)
// }
