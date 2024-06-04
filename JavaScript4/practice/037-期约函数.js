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

// class ProgressPromise extends Promise{
//   constructor(executor) {
//     const notifyHandlers = []
//     super((resolve, reject) => {
//        return executor(resolve, reject, progress => {
//         notifyHandlers.forEach(notify => {
//           notify(progress)
//         })
//       })
//     })
//     this.notifyHandlers = notifyHandlers
//   }
//   notify = function (fun) {
//     this.notifyHandlers.push(fun)
//     return this
//   }
// }
// const p = new ProgressPromise((resolve, reject, notify) => {
//   function getData(step) {
//     if (step < 5) {
//       notify(`${step * 20} %.........`)
//       setTimeout(getData, 1000, step + 1)
//     } else {
//       resolve('done')
//     }
//   }
//   getData(0)
// })
// p.notify(progress => {
//   console.log(progress)
// })
// p.then(res => {
//   console.log(res)
// })
// console.log(Promise.resolve(Promise.reject('err')))
// async function foo() {
//   const origin = 'xz'
//   const obj = { }
//   const thenable = {
//     then(callback) {
//       callback('thenable')
//     }
//   }
//   const p = Promise.resolve('resolve')
//   console.log(await origin, await obj, await thenable, await p)
//   await Promise.reject('reject')
//   console.log('end') // 不执行
// }
// foo().catch(console.log)
// try {
//     Promise.reject(1)
// } catch (error) {
//     console.log(error) // 捕获不到，会报错
// }

// async function foo() {
//   console.log(await Promise.resolve('foo'))
// }
// async function bar() {
//   console.log(await 'bar')
// }
// async function baz() {
//   console.log('baz')
// }
// foo()
// bar()
// baz()

// async function foo(){
//   console.log(await Promise.resolve(10))
// }
// async function fun(){
//   console.log(await 1)
// }
// foo()
// fun()

//sleep
// function sleep(delay){
//   return new Promise(resolve => setTimeout(resolve, delay))
// }
// async function main(){
//   console.log(1)
//   await sleep(1000)
//   console.log(2)
// }
// main()

// async function randomDelay(id) {
//   // 延迟 0~1000 毫秒
//   const delay = Math.random() * 1000;
//   return new Promise((resolve) => setTimeout(() => {
//   console.log(`${id} finished`);
//   resolve();
//   }, delay));
//  }
//  async function foo() {
//   const t0 = Date.now();
//   const promises = Array(5).fill(null).map((_, i) => randomDelay(i));
//   console.log(`${Date.now() - t0}ms elapsed`);
//  }
//  foo();
const p = new Promise((resolve, reject) => {
})
const p2 = p.then(
)
console.log(p === p2)