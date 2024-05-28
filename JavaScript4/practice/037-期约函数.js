// p.then(()=>{
//     console.log('then-done')
// })
// var p = new Promise((x,c)=>{
//     console.log('lllll')
//     x()
// })
// let p1 = new Promise((resolve, reject) => reject(Error('foo')));
// let p2 = new Promise((resolve, reject) => { throw Error('foo'); });
// let p3 = Promise.resolve().then(() => { throw Error('foo'); });
// let p4 = Promise.reject(Error('foo'));
// setTimeout(console.log, 1000, p1); // Promise <rejected>: Error: foo
// setTimeout(console.log, 0, p2); // Promise <rejected>: Error: foo
// setTimeout(console.log, 0, p3); // Promise <rejected>: Error: foo
// setTimeout(console.log, 0, p4); // Promise <rejected>: Error: foo
// let A = new Promise((resolve, reject) => {
//   console.log('A')
//   resolve()
// })
// let B = A.then(() => console.log('B'))
// B.then(() => console.log('D'))
// let C = A.then(() => console.log('C'))
// C.then(() => console.log('F'))
// B.then(() => console.log('E'))
// C.then(() => console.log('G'))

// const p = new Promise((resolve, reject)=>{
//     resolve()
// })
// p.then(()=>{
//     console.log('then')
// })
// console.log('tong')
// let p = Promise.race([Promise.reject(1), new Promise((_, reject) => reject(2))])
// p.catch(reason => setTimeout(console.log, 0, reason)) // 1 （之后不再处理2

//期约组合
// const add_2 = x => x + 2
// const add_4 = x => x + 4
// const add_8 = x => x + 8
// const fns = [add_2, add_4, add_8]
// const compose = fns => {
//   return x => fns.reduce((p, fn) => p.then(fn), Promise.resolve(x))
// }
// const flow = compose(fns)
// flow(1).then(result => {
//   console.log(result)
// })

class ProgressPromise extends Promise{
  constructor(executor) {
    const notifyHandlers = []
    super((resolve, reject) => {
       return executor(resolve, reject, progress => {
        notifyHandlers.forEach(notify => {
          notify(progress)
        })
      })
    })
    this.notifyHandlers = notifyHandlers
  }
  notify = function (fun) {
    this.notifyHandlers.push(fun)
    return this
  }
}
const p = new ProgressPromise((resolve, reject, notify) => {
  function getData(step) {
    if (step < 5) {
      notify(`${step * 20} %.........`)
      setTimeout(getData, 1000, step + 1)
    } else {
      resolve('done')
    }
  }
  getData(0)
})
p.notify(progress => {
  console.log(progress)
})
p.then(res => {
  console.log(res)
})
