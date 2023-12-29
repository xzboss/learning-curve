// // class Person{
// //     constructor(name){
// //         this.name = name
// //     }
// //     sayName=()=>{
// //         console.log(this.name)
// //     }
// // }
// // const person = new Person('111')
// // const person2 = new Person('222')
// // person.sayName()
// // person2.sayName()
// // console.log(person.sayName === person2.sayName,Person.sayName)

// const obj = {a:1,[Symbol()]:'sy'}
// obj.__proto__.fhg = '344'
// Object.defineProperty(obj,'name',{
//     enumerable:false,
//     configurable:true,
//     value:'xz',
//     writable:true
// })
// for(const i in obj){
//     console.log(i)
// }
// console.log(Object.keys(obj))
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))

// const obj = {}
// Object.prototype.pro = {}
// const a = {}
// obj.pro.name = 'hell'
// console.log(obj.pro)
// console.log(Object.getOwnPropertyNames(Object.prototype))

// function Person() {

// }
// const person = new Person()
// console.log( person.prototype )

// class Person {
//     name() {
//         return 'xz'
//     }
// }
// const person = new Person()
// Object.setPrototypeOf(Person,{
//     name(){
//         return 'vrjhbhfbvbh'
//     }
// })
// const obj = {}
// Object.defineProperty(obj, 'name', {
//     configurable:true,
//     writable: true,
//     value: 'frerf'
// })
// console.log(Object.getOwnPropertyDescriptors(obj))

// const obj = {
//     name: '1',
//     age: 'age',
//     [Symbol()]: 'sy'
// }
// obj.__proto__.other = 'yy'
// Object.defineProperty(obj, 'ko',{
//     enumerable: true,
//     value: 'okkok'
// })
// console.log(Object.getOwnPropertyNames(obj))
// function Person(){

// }
// Person.prototype = {
//     name: 'xz'
// }

// const person = new Person()
// console.log(Person === Person.prototype.constructor)

// function Person(){

// }
// const obj = {}
// console.log(obj.constructor)

// // 原型链实现继承
// function Person() {}
// function Kid() {}
// Person.prototype.say = function () {
//   console.log("I am person");
// };

// Kid.prototype = new Person();
// const kid = new Kid();
// kid.say(); // I am person
// console.log(kid.constructor); // Person
// console.log(kid instanceof Kid);

// 盗用构造函数
// function Person() {
//   this.name = "person";
// }
// function Kid() {
//   Person.call(this);
// }
// const kid = new Kid();
// console.log(kid);

// 组合式继承

// function Person(name) {
//   this.name = name || "person";
// }
// Person.prototype.say = () => {
//   console.log("person-proto-say");
// };
// function Kid(name) {
//   Person.call(this, name);
// }
// Kid.prototype = new Person();
// const kid = new Kid("xz");
// kid.say();
// console.log(kid);

// 原型式继承

// const Person = {
//   name: "person"
// };
// // Object.create大致实现
// function create(proto) {
//   function Kid() {}
//   Kid.prototype = proto;
//   return new Kid();
// }
// const kid = create(Person);

// 寄生式继承

function Person() {}
Person.prototype.say = () => {
  console.log("person");
};
function inherit(child, person) {
  let proto = Object(person.prototype);
  proto.constructor = child;
  child.prototype = proto;
}
function Kid() {}
inherit(Kid, Person);
const kid = new Kid();
kid.say();
