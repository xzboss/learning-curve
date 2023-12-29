// 'use strict'
// //instanceof
// function myInstanceof(target, type) {
//   let proto = Object.getPrototypeOf(target)
//   while (proto) {
//     if (proto === Object.getPrototypeOf(type)) {
//       return true
//     }
//     proto = Object.getPrototypeOf(proto)
//   }
//   return false
// }
// console.log(
//   myInstanceof(1, Object),
//   1 instanceof Number,
//   Object.toString === Object.prototype.toString
// )

// const { type } = require('os')

// //class instanceof
// class Person {
//   static [Symbol.hasInstance](op) {
//     return op.__proto__ === this.prototype // 结果会自动转化为 boolean
//   }
//   constructor(name) {
//     this.name = name
//   }
// }
// const person = new Person('xz')
// console.log(person instanceof Person)

// // getPrototypeOf
// console.log(
//   Person.prototype === Object.getPrototypeOf(Person), // false
//   Person.__proto__ === Object.getPrototypeOf(Person), // true
//   person.prototype === Object.getPrototypeOf(person), // false
//   person.__proto__ === Object.getPrototypeOf(person), // true
//   person.__proto__ === Person.prototype, // true
//   person.__proto__ === Person.__proto__, // false
//   person.__proto__ === Object.getPrototypeOf(Person), // false
//   (() => {}).__proto__ === Object.getPrototypeOf(Object), // true
// )

// 闭包实现变量私有化
// let Person
// ;(function () {
//   const gl = 'global'
//   class PersonPri {
//     constructor(name) {
//       this.name = gl + name
//     }
//   }
//   Person = PersonPri
// })()
// const person = new Person('-xz')
// console.log(person)

// call
// Function.prototype.myCall = function(target, ...arg){
//     const symKey = Symbol()
//     target[symKey] = this
//     const result = target[symKey](...arg)
//     delete target[symKey]
//     return result
// }
// // apply
// Function.prototype.myApply = function(target, arg) {
//     const symKey = Symbol()
//     target[symKey] = this
//     const result = target[symKey](...arg)
//     delete target[symKey]
//     return result
// }
// // bind
// Function.prototype.myBind = function(target, ...arg) {
//     const _this = this
//     return function(...innerArg){
//         return _this.myCall(target, ...arg, ...innerArg)
//     }
// }
// const A = {
//     name:'xz',
//     say(n, m){
//         console.log(`----${this.name}---${n}---${m}----`)
//     }
// }
// const B = {
//     name:'xj'
// }
// A.say.myCall(B, 0, 'call')
// A.say.myApply(B, [1, 'apply'])
// const bindReturn = A.say.myBind(B, 2, 'bind')
// bindReturn()

// 深浅拷贝 https://segmentfault.com/a/1190000016672263
// function shallowClone(value) {
//   if (value === null || typeof value !== 'object') {
//     return value
//   }
//   const obj = Array.isArray(value) ? [] : {}
//   for (const key in value) {
//     obj[key] = shallowClone(value[key])
//   }
//   return obj
// }
// //
// function deepClone(originObj) {
//   const cache = new WeakMap()
//   function _deepClone(value) {
//     if (value === null || typeof value !== 'object') {
//       return value
//     }
//     if (cache.has(value)) {
//       return cache.get(value)
//     }
//     const obj = Array.isArray(value) ? [] : {} // 此处可以考虑set，map，weak...
//     cache.set(value)
//     // 同理此处可以遍历set，map，
//     for (const key in value) {
//       obj[key] = _deepClone(value[key])
//     }
//     const symKeys = Object.getOwnPropertySymbols(value) // 处理 symbol 键
//     for (const key of symKeys) {
//       obj[key] = _deepClone(value[key])
//     }
//     return obj
//   }
//   return _deepClone(originObj)
// }
// const o = {
//   name: 'xz',
//   age: 10,
//   handle: {
//     value: 0
//   },
//   [Symbol()]: 'de',
//   arr: [1, 2, { name: '3' }]
// }
// function dd() {}
// dd.k = 1
// const newO = deepClone(o)
// const s = Object.getOwnPropertySymbols(o)
// console.log(newO, o[s[0]])

//防抖节流
// function throttle(func, delay) {
//   let time = delay + 1,
//     currentTime = 0
//   return function (...args) {
//     time = Date.now()
//     if (time - currentTime <= delay) {
//       return
//     }
//     currentTime = time
//     return func.apply(context, args)
//   }
// }
// const test = throttle(() => {
//   console.log('ok')
// }, 2000)
// setInterval(test, 100)
// function debounce(func, delay) {
//   let result, timer
//   return function (...args) {
//     if (timer) {
//       return
//     }
//     const context = this
//     timer = setTimeout(function () {
//       result = func.apply(context, args)
//       timer = null
//     }, delay)
//     return result
//   }
// }
// const obj = {}
// obj.test = debounce(function () {
//   console.log(this)
// }, 100)
// let i = 0
// while (i < 100) {
//   obj.test()
//   i++
// }
// console.log(isNaN(undefined)) // true
// setTimeout(function () {
//   console.log(this)
// }, 1000)
class Person {
  constructor() {
    // console.log(this.r(), this.b())
  }
  A() {
    console.log(this)
  }
  B = () => {
    console.log(this)
  }
  C = function () {
    console.log(this)
  }
}
function D() {
  console.log(this)
}
const person = new Person()
const A = person.A
const B = person.B
const C = person.C
A() // undefined
B() // person
C() // undefined
D() // global // 'use strict' undefined
