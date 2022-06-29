const os = require('os')

//info about user
console.log(os.userInfo())

//method returns the system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(), 
    release: os.release(),
    totalMem: os.totalmem(),
    freemem: os.freemem()
}

console.log(currentOS)