// // 第一种用法
// const person = {}
// Object.defineProperty(person, 'name', {
//   // 可否配置
//   configurable: true,
//   // 可否修改
//   writable: true,
//   // 可否遍历
//   enumerable: true,
//   // 值
//   value: 'xz'
// })

// // 第二种 访问器属性
// const car = {
//   brand: 'benz'
// }
// Object.defineProperty(car, 'flex', {
//   get() {
//     return this.brand + '-big'
//   },
//   set(newVal) {
//     console.log(newVal) // new
//   }
// })
// car.flex = 'new'
// console.log(car.flex) // 'benz-big'

// // 第三种 定义多个属性
// const plural = {}
// Object.defineProperties(plural, {
//   v1: {
//     configurable: true,
//     writable: true,
//     enumerable: true,
//     value: 'xz'
//   },
//   v2: {
//     get() {
//       return 0
//     },
//     set(newVal) {
//       // code
//     }
//   }
// })

//> 四个数据属性默认值为 false
// configurable 为 false 后不能更改回来
// const obj = {}
// Object.defineProperty(obj,'name',{
//   configurable: true,
//   // value:'hello',
//   // writable:false,
//   enumerable:true,
//   get(){
//     return 'o'
//   }
// })
// console.log(obj.name)
// const obj = {}
// Object.defineProperties(obj,{
//   name:{
//     configurable:true
//   },
//   age:{
//     get(){
//       return 19
//     }
//   }
// })
// const descriptor = Object.getOwnPropertyDescriptor(obj,'name')
// const descriptors = Object.getOwnPropertyDescriptors(obj)
// console.log(descriptor,descriptors)

// 使用字面量形式定义访问器属性
// const person = {
//   get name(){
//     console.log('you get it')
//     return 'xz'
//   },
//   set name(newV){
//     console.log(`you set it = ${newV}`)
//   }
// }
// person.name = 'new name'
// console.log(person.name)
// // you set it = new name
// // you get it
// // xz


// 


