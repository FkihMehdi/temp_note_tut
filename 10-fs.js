const {readFileSync,writeFileSync} = require('fs')
console.log('start')
const first = readFileSync('./content/subfolder/first.txt','utf-8')
const second = readFileSync('./content/subfolder/second.txt','utf-8')



writeFileSync(
  './content/subfolder/result.txt',
  `here is the result : ${first},${second}`,
  {flag:'a'}
)
// to read files and to write in files
// flag kima a bach ma3adech ifase5 mil fichier
console.log('done with this task')
console.log('starting the next one');
