const { readFileSync, writeFileSync } = require('fs')
console.log('start')

const path = require('path')
const firstFilePath = path.join('\content', 'first.txt')

const first = readFileSync(firstFilePath, 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log(first, second)

writeFileSync(
    './content/syncFirstSecond.txt', 
    `Here is the result: ${first}, and ${second}`, 
    { flag: 'a' }
)

console.log('done with the task')
console.log('starting the next one')
