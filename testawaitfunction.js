let stocks = {
  Fruits : ["banana","strawberry"],
  holder : ["cones","cup","stick"],
  topping : ['chocolate']
}


let is_shop_open = true

/*let topping_choice = ()=>{
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(
        console.log("which topping would you love ?")
      )
    }, 3000);
  })
}


async function kitchen(){
  console.log("A")
  console.log("B")
  console.log("C")
  await topping_choice()
  console.log("D")
  console.log("E")

}


kitchen()


console.log("cleaning the dishes")
console.log("cleaning the table");
console.log("taking other orders");*/


function time(ms){
  return new Promise((resolve,reject)=>{
    if (is_shop_open){
      setTimeout(resolve, ms);
    }
    else {
      reject(console.log("Shop is closed"))
    }
  })
}


async function kitchen(){
  try{
    await time(2000)
    console.log(`${stocks.Fruits[0]}`);
    await time(0)
    console.log("Start the production");
    await time(2000)
    console.log("cut the fruit");
    await time(1000)
  }
  catch(error) {
    console.log("customer left",error);
  }
  finally{
    await time(10000)
    console.log("day ended, shop is closed");
  }
}


kitchen()