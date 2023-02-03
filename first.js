const os = require('os');
//info about current user 

const user = os.userInfo()
console.log(user);
// method return the system uptime in second 

console.log(`THe system Uptime is ${os.uptime()} second`);

const currentOs = {
  name : os.type(),
  release : os.release(),
  totalMen : os.totalmem(),
  freeMem : os.freemem(),
}

console.log(currentOs)


const path = require('path')
console.log(path.sep) // separateur

const filePath = path.join('/content','','test.txt')
console.log(filePath) //path imta3 il fichier


const base = path.basename(filePath)
console.log(base) // a5er il ficher (La base)

const absolute = path.resolve(__dirname,'content','subfolder')
console.log(path.basename(absolute)) // full path