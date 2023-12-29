const f3000 = new Promise((resolve)=>{
    setTimeout(()=>{
        // console.log(3000)
        resolve()
    },3000)
})

const f2000 = new Promise((resolve)=>{
    setTimeout(()=>{
        // console.log(2000)
        resolve()
    },2000)
})

const f1000 = new Promise((resolve)=>{
    setTimeout(()=>{
        // console.log(1000)
        resolve()
    },1000)
})

// console.log(gen.next())
// console.log(gen.next())
// console.log(gen.next())

async function* asyncGenerator() {
    yield await f3000;
    yield await f2000;
    yield await f1000;
  }
  
const gen = asyncGenerator()
(function(){for await (const item of gen) {
  console.log(item);
}})()

  