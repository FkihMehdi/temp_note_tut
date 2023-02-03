const {readFile,writeFile} = require('fs')
var chaine;
console.log('start')
readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
  if (err)
  {
    console.log(err);
    return
  }
  console.log("i m here in 1");
  const first = result
  readFile('./content/subfolder/second.txt','utf-8',(err,result)=>{
    if (err)
    {
      console.log(err)
      return
    }
    console.log('i m here in 2')
    const second= result
    writeFile(
      './content/subfolder/result.txt',
      `here is the result : ${first},${second}`
      ,(err,result)=>{
        if (err)
        {
          console.log(err)
          return
        }
        console.log('i m here in 3');
        console.log('done with this task')
      })
  })
}
)

console.log('starting the next task 1')
readFile('./content/subfolder/first.txt','utf-8',(err,result)=>{
  if (err)
  {
    console.log(err);
    return
  }
  chaine = result
  console.log(chaine);
  console.log('i m here in 4');
  
})
console.log('starting the next task 2');
// lenna mahyach bach ti5§dem direct ill read ou il write , yimchi ikamel yi5dem il b9iya ou ba3d yarj3elhom 5ater il utilisateur inajem yo93od barcha ya9ra fil fichier donc il methode hathi t5ali il b9iya ikamlou yi5dmou