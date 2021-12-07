const fs = require('fs')
const instructions = fs.readFileSync('./02/data.txt').toString().split('\n')

let directionValue = 0
let depthValue = 0

instructions.forEach((instruction) => {
  const direction = instruction.split(' ')[0]
  const length = parseInt(instruction.split(' ')[1])

  if (direction === 'forward') return (directionValue += length)
  direction === 'down' ? (depthValue += length) : (depthValue -= length)
})

return directionValue * depthValue
