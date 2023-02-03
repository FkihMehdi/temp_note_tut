/*const http = require('http')
const server = http.createServer((req,res)=>{
  if(req.url === '/'){
    res.end('Home page')
  }
  else if (req.url === '/about')   //zdiet il else bach ma3adech yatla3 erreur zid lawej 3leh
  {
    for(let i=0;i<1000;i++)
    {
      for(let j=0;j<1000;j++)
      {
        console.log(`values ${i} ${j}`)
      }
    }
    res.end('About the page')
  }
  else {
    res.end('ERROR PAGE')
  }
})

server.listen(5000,()=>{
  console.log('Server listening on port : 5000.....');
})*/

const {readFile} = require('fs')
const { get } = require('lodash')

const getText = (path)=>{
  return new Promise((resolve,reject)=>{
    readFile(path,'utf-8',(err,data)=>{
      if (err)
      {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

const start = async()=>{
  try{
    const first = await getText('./content/subfolder/first.txt')
    const second = await getText('./content/subfolder/second.txt')
    console.log(first,second);
  } catch(error){
    console.log(error);
  }
}
 

start()