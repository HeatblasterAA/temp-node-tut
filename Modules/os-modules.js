const { log } = require('console')
const os = require('os') // built in module

//info abt curr user
const user= os.userInfo()
console.log(user)

//method to return system uptime

console.log(`The system uptime is ${os.uptime()/3600} seconds`)

const currentOS = {
  name:os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)