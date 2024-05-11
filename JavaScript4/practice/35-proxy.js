// // 捕获对象（trapTarget
// const target = { name: 'xz' }
// Object.defineProperty(target, 'age', {
//   value: '19',
//   configurable: false,
//   writable: false
// })
// // 捕获器（trap
// const handler = {
//   // 捕获对象 属性名 触发器（一般为代理对象
//   get(trapTarget, property, receiver) {
//     return trapTarget['name'] // TypeError
//   }
// }
// // 代理对象
// const proxy = new Proxy(target, handler)
// proxy.age
// xz

// const obj = {
//   age: 19
// }
// Object.setPrototypeOf(obj, proxy)
// console.log(obj.name)

// // 捕获对象（trapTarget
// const target = { name: 'xz' }
// const handler = {
//   get(trapTarget, property, receiver) {
//     console.log('ok')
//     return trapTarget[property] // TypeError
//   }
// }
// // 代理对象
// const {proxy, revoke} = Proxy.revocable(target, handler)
// proxy.name
// revoke()
// proxy.name // Uncaught TypeError TypeError: Cannot perform 'get' on a proxy that has been revoked

// Reflect
// const obj = {}
// Object.defineProperty(obj, 'name', {
//   value: 'xz',
//   configurable:false
// })
// Object.defineProperty(obj, 'name',{
//   configurable:true,
// }) // TypeError
// Reflect.defineProperty(obj, 'name', {
//   configurable:true
// }) // 同样不能修改，但不报错

// const target = {
//   name: 'xz',
//   thisValEqualsProxy() {
//     this.name = '----'
//   }
// }
// const proxy = new Proxy(target, {
//   get(target, property) {
//     return target[property]
//   }
// })
// // target.thisValEqualsProxy()
// // console.log(target.name)
// proxy.thisValEqualsProxy()
// console.log(proxy.name)

// const target = new Date()
// const proxy = new Proxy(target, {})
// console.log(Date.prototype === target.__proto__) // true

// const target = {
//   getThis(){
//     console.log(this)
//   }
// }
// const proxy = new Proxy(target, {})
// target.getThis() // target
// proxy.getThis() // proxy

// const target = { name: 'xz' }
// Object.defineProperty(target, 'age', {
//   get:undefined
// })
// Object.defineProperty(target, 'age', {
//   configurable: false,
// })
// const handler = {
//   get(trapTarget, property, receiver) {
//     return 0 // TypeError
//   }
// }
// const proxy = new Proxy(target, handler)
// console.log(proxy.age)

// const target = {name:0}
// const handler = {
//   set(trapTarget, property, value, receiver) {
//     console.log('set')
//     return Reflect.set(...arguments)
//   },
//   defineProperty(target, property, descriptor){
//     console.log('defineProperty')
//     return Reflect.defineProperty(...arguments)
//   }
// }
// const proxy = new Proxy(target, handler);
// proxy.name = 0

// console.log(proxy.name)

// const target = {}
// Object.defineProperty(target, 'name', {
//   value:'xz',
//   configurable:true
// })
// const proxy = new Proxy(target,{})

// Object.defineProperty(proxy,'name',{
//   value:'xx',
//   configurable:false
// })
// console.log(proxy.name)

// const target = {}
// const handler = {
//   get(trapTarget, property, receiver) {
//     // 如果 target.property 不可写且不可配置，则处理程序返回的值必须与 target.property 匹配。
//     // 如果 target.property 不可配置且[[Get]]特性为 undefined，处理程序的返回值也必须是 undefined。
//     return Reflect.get(...arguments)
//   },
//   set(trapTarget, property, value, receiver) {
//     // 如果 target.property 不可写且不可配置，则不能修改目标属性的值。
//     // 如果 target.property 不可配置且[[Set]]特性为 undefined，则不能修改目标属性的值。
//     // 在严格模式下，处理程序中返回 false 会抛出 TypeError。
//   },
//   has(trapTarget, property) {
//     // 如果 target.property 存在且不可配置，则处理程序必须返回 true。
//     // 如果 target.property 存在且目标对象不可扩展，则处理程序必须返回 true。
//   },
//   defineProperty(trapTarget, property, descriptor) {
//     // 如果目标对象不可扩展，则无法定义属性。
//     // 如果目标对象有一个可配置的属性，则不能添加同名的不可配置属性。
//     // 如果目标对象有一个不可配置的属性，则不能添加同名的可配置属性。
//   },
//   getOwnPropertyDescriptor(trapTarget, property) {},
//   deleteProperty(trapTarget, property) {},
//   ownKeys(trapTarget) {},
//   getPrototypeOf(trapTarget) {},
//   setPrototypeOf(trapTarget, prototype) {},
//   isExtensible(trapTarget) {},
//   construct(trapTarget,args,bingThis){}
// }
// const proxy = new Proxy(target, handler)
function foo(...args) {
  console.log(...args)
}
const proxy = new Proxy(foo, {
  apply(trapTarget, thisArg, argumentsList) {
    console.log(trapTarget === foo, thisArg, argumentsList)
  }
})
const obj = {
  name: 'xz',
  say: proxy
}
obj.say(1, 2, 3) // true obj [1, 2, 3]