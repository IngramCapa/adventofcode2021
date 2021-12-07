const fs = require('fs')
const instructions = fs.readFileSync('./02/data.txt').toString().split('\n')

//Solution to part 2

let position = 0
let depth = 0
let aim = 0

instructions.forEach((instruction) => {
  const direction = instruction.split(' ')[0]
  const length = parseInt(instruction.split(' ')[1])

  if (direction === 'forward') {
    position += length
    return (depth += length * aim)
  }
  direction === 'down' ? (aim += length) : (aim -= length)
})

return position * depth

//Solution to part 1

let direction = 0
let depth = 0

instructions.forEach((instruction) => {
  const direction = instruction.split(' ')[0]
  const length = parseInt(instruction.split(' ')[1])

  if (direction === 'forward') return (direction += length)
  direction === 'down' ? (depth += length) : (depth -= length)
})

return direction * depth
