// // // // // // // // // // // // // // // // // // // // // // const obj = {
// // // // // // // // // // // // // // // // // // // // // // 	name: 'xz',
// // // // // // // // // // // // // // // // // // // // // // 	age: 19,
// // // // // // // // // // // // // // // // // // // // // // 	s: '-----',
// // // // // // // // // // // // // // // // // // // // // // 	[Symbol.iterator]: function () {
// // // // // // // // // // // // // // // // // // // // // // 		const keys = Object.keys(this)
// // // // // // // // // // // // // // // // // // // // // // 		let i = 0
// // // // // // // // // // // // // // // // // // // // // // 		return {
// // // // // // // // // // // // // // // // // // // // // // 			next: () => {
// // // // // // // // // // // // // // // // // // // // // // 				if (i > keys.length - 1) {
// // // // // // // // // // // // // // // // // // // // // // 					return { value: undefined, done: true }
// // // // // // // // // // // // // // // // // // // // // // 				}
// // // // // // // // // // // // // // // // // // // // // // 				return { value: obj[keys[i++]], done: false }

// // // // // // // // // // // // // // // // // // // // // // 			}
// // // // // // // // // // // // // // // // // // // // // // 		}
// // // // // // // // // // // // // // // // // // // // // // 	}
// // // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // // for (const value of obj) {
// // // // // // // // // // // // // // // // // // // // // // 	console.log(value)
// // // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // // console.log(isNaN(null))
// // // // // // // // // // // // // // // // // // // // // // console.log(Object.prototype.toString.call(null))
// // // // // // // // // // // // // // // // // // // // // // console.log(Number(undefined),Number(null),Number('x4x'))
// // // // // // // // // // // // // // // // // // // // // // const a = '\\x41'
// // // // // // // // // // // // // // // // // // // // // // console.log(a)
// // // // // // // // // // // // // // // // // // // // // // const c = 1
// // // // // // // // // // // // // // // // // // // // // // // console.log(c.toString())
// // // // // // // // // // // // // // // // // // // // // const arr = [2]
// // // // // // // // // // // // // // // // // // // // // arr.valueOf = function () {
// // // // // // // // // // // // // // // // // // // // //   console.log('valueOf @@@')
// // // // // // // // // // // // // // // // // // // // //   return Array.prototype.valueOf.call(arr) // [2]
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // arr.toString = function () {
// // // // // // // // // // // // // // // // // // // // //   console.log('toString @@@')
// // // // // // // // // // // // // // // // // // // // //   return Array.prototype.toString.call(arr) // '2'
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // // Number = function () { 
// // // // // // // // // // // // // // // // // // // // // 	console.log('Number @@@')
// // // // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // // // console.log(arr > 0)
// // // // // // // // // // // // // // // // // // // // // // valueOf @@@
// // // // // // // // // // // // // // // // // // // // // // toString @@@
// // // // // // // // // // // // // // // // // // // // // //这里中间还执行了 Number(arr)
// // // // // // // // // // // // // // // // // // // // // // true

// // // // // // // // // // // // // // // // // // // // console.log(null || null // null
// // // // // // // // // // // // // // // // // // // // ,null && null // null
// // // // // // // // // // // // // // // // // // // // ,true && null,4 && 8) // null
// // // // // // // // // // // // // // // // // // // console.log(NaN === NaN)
// // // // // // // // // // // // // // // // // // // function getPromise (data, delay) {
// // // // // // // // // // // // // // // // // // // 	return new Promise((resolve, reject) => {
// // // // // // // // // // // // // // // // // // // 		setTimeout(() => {
// // // // // // // // // // // // // // // // // // // 			resolve(data)
// // // // // // // // // // // // // // // // // // // 		}, delay)
// // // // // // // // // // // // // // // // // // // 	})
// // // // // // // // // // // // // // // // // // // }

// // // // // // // // // // // // // // // // // // // const asyncArr = [
// // // // // // // // // // // // // // // // // // // 	[30, 3000],
// // // // // // // // // // // // // // // // // // // 	[20, 2000],
// // // // // // // // // // // // // // // // // // // 	[10, 1000]
// // // // // // // // // // // // // // // // // // // ]

// // // // // // // // // // // // // // // // // // // let i = 0
// // // // // // // // // // // // // // // // // // // 	; (async function () {
// // // // // // // // // // // // // // // // // // // 		for await (const data of asyncArr.map(item => getPromise(item[0], item[1]))) {
// // // // // // // // // // // // // // // // // // // 			console.log(data)
// // // // // // // // // // // // // // // // // // // 		}
// // // // // // // // // // // // // // // // // // // 	})()

// // // // // // // // // // // // // // // // // // const obj = {
// // // // // // // // // // // // // // // // // // 	n:0,
// // // // // // // // // // // // // // // // // // 	a: () => {
// // // // // // // // // // // // // // // // // // 		console.log(this)
// // // // // // // // // // // // // // // // // // 	},
// // // // // // // // // // // // // // // // // // 	b(){
// // // // // // // // // // // // // // // // // // 		console.log(this)
// // // // // // // // // // // // // // // // // // 	}
// // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // obj.a()
// // // // // // // // // // // // // // // // // // // obj.b()

// // // // // // // // // // // // // // // // // const query = '?id=999&name=xz&age=18'
// // // // // // // // // // // // // // // // // const obj = {}
// // // // // // // // // // // // // // // // // query.replace(/([^&?]+)=([^&]*)/gi,(match, $1, $2, origin)=>{
// // // // // // // // // // // // // // // // // 	console.log(match)
// // // // // // // // // // // // // // // // //     obj[$1] = $2
// // // // // // // // // // // // // // // // // })
// // // // // // // // // // // // // // // // // console.log(obj)
// // // // // // // // // // // // // // // // // // match 为整个正则捕获到的 比如第一次就是 id=999
// // // // // // // // // // // // // // // // // // $1, $2 分别是捕获组 ([^&?]+), ([^&]*) 即 id, 999
// // // // // // // // // // // // // // // // // // origin 为原始字符串
// // // // // // // // // // // // // // // // function func(){
// // // // // // // // // // // // // // // // 	// console.log(b, c) //报错
// // // // // // // // // // // // // // // // 	eval('let a = 1; var b = 1; function c(){}')
// // // // // // // // // // // // // // // // 	console.log(a, b, c) // 0 1 F
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // function foo(){
// // // // // // // // // // // // // // // // 	console.log(b, c) // undefined F
// // // // // // // // // // // // // // // // 	let a = 1; var b = 1; function c(){};
// // // // // // // // // // // // // // // // 	console.log(a, b, c) // 0 1 F
// // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // func()
// // // // // // // // // // // // // // // // foo()

// // // // // // // // // // // // // // // // 对于 start end 大小相反，超出，负数都直接啥也不干
// // // // // // // // // // // // // // // const arr = [1,2,3,4,5]
// // // // // // // // // // // // // // // console.log(arr.copyWithin(9, start=0, end=4))
// // // // // // // // // // // // // // // console.log(arr)
// // // // // // // // // // // // // // //  // [)
// // // // // // // // // // // // // // //  // [)
// // // // // // // // // // // // // // const array = [1, 2, 3, 4, 5];

// // // // // // // // // // // // // // array.forEach(element => {
// // // // // // // // // // // // // //     if (element === 3) {
// // // // // // // // // // // // // //         throw new Error("Terminating forEach loop");
// // // // // // // // // // // // // //     }
// // // // // // // // // // // // // //     console.log(element);
// // // // // // // // // // // // // // });

// // // // // // // // // // // // // const arr = [1]
// // // // // // // // // // // // // console.log(
// // // // // // // // // // // // //     arr.reduce((pre, cur, index, arr) => pre + cur) // 15
// // // // // // // // // // // // //     //初始：      1    2     1    arr
// // // // // // // // // // // // //     //之后：   return  3     2    arr
// // // // // // // // // // // // // )
// // // // // // // // // // // // // 行为基本与 map 一致；其实可以理解为键值相等的 map
// // // // // // // // // // // // const set = new Set(['ddd', 'rrr', 3, 4]) // { 1, 2, 3, 4 }
// // // // // // // // // // // // set.values === set[Symbol.iterator] // true
// // // // // // // // // // // // set.entries() // {[1, 1], [2, 2], [3, 3], [4, 4]}
// // // // // // // // // // // // console.log(set.entries())
// // // // // // // // // // // const arr = [1, 2, 3, 4, 5]
// // // // // // // // // // // for (const item of arr) {
// // // // // // // // // // //   if (item > 3) {
// // // // // // // // // // //     break // return执行了，但是并没有终止
// // // // // // // // // // //   }
// // // // // // // // // // //   console.log(item) // 1 2 3 arr iter return
// // // // // // // // // // // }
// // // // // // // // // // // for (const i of arr) {
// // // // // // // // // // //   // 这次会继续上次的迭代
// // // // // // // // // // //   console.log(i) // 5
// // // // // // // // // // // }
// // // // // // // // // // function* nTimes(n) { 
// // // // // // // // // // 	console.log('@@@')
// // // // // // // // // // 	if (n > 0) { 
// // // // // // // // // // 			yield* nTimes(n - 1); 
// // // // // // // // // // 			yield n - 1; // 返回的值来自这里，也就是说 yield* 不会暂停
// // // // // // // // // // 	} 
// // // // // // // // // // } 
// // // // // // // // // // for (const x of nTimes(3)) { 
// // // // // // // // // // 	console.log(x); 
// // // // // // // // // // }
// // // // // // // // // function* fibonacciGeneratorFunction(a = 0, b = 1) {
// // // // // // // // //   yield a;   
// // // // // // // // //   yield* fibonacciGeneratorFunction(b, b + a);
// // // // // // // // // }

// // // // // // // // // const fibonacciGenerator = fibonacciGeneratorFunction();
// // // // // // // // // console.log(
// // // // // // // // // fibonacciGenerator.next(), // { value: 1, done: false }
// // // // // // // // // fibonacciGenerator.next(), // { value: 1, done: false }
// // // // // // // // // fibonacciGenerator.next(), // { value: 2, done: false }
// // // // // // // // // fibonacciGenerator.next(), // { value: 3, done: false }
// // // // // // // // // fibonacciGenerator.next(), // { value: 5, done: false }
// // // // // // // // // )

// // // // // // // // class Obj {
// // // // // // // // 	fun1 () {
// // // // // // // // 		console.log('fun1')
// // // // // // // // 	}
// // // // // // // // 	fun2 = function () {
// // // // // // // // 		console.log('fun2')
// // // // // // // // 	}
// // // // // // // // 	fun3 = () => {
// // // // // // // // 		console.log('fun3')
// // // // // // // // 	}
// // // // // // // // }


// // // // // // // // console.log(Obj)
// // // // // // // Object.__proto__={
// // // // // // // 	a:0
// // // // // // // }
// // // // // // // Object.prototype={
// // // // // // // 	f:0
// // // // // // // }
// // // // // // // for (let key in Object) {
// // // // // // // 	console.log(key)
// // // // // // // }
// // // // // // class Person {
// // // // // // 	a(){}
// // // // // // 	b = 1
// // // // // // }
// // // // // // const p = new Person()
// // // // // // console.log()
// // // // // // const obj = {
// // // // // // 	[Symbol('d')]:0
// // // // // // }
// // // // // // console.log(Object.keys(obj),{...obj})
// // // // // // const obj={
// // // // // // 	a:1,
// // // // // // 	b:0
// // // // // // }
// // // // // // for (const [i,j] of obj) {
// // // // // // 	console.log(i,j)
// // // // // // }
// // // // // let xhr = new XMLHttpRequest();
// // // // // xhr.open('GET', 'http://127.0.0.1:4523/m1/1314808-0-default/user/demo', true)
// // // // // xhr.onreadystatechange = function () {
// // // // // 	if (this.readyState !== 4) {
// // // // // 		return
// // // // // 	}
// // // // // 	if (this.status === 200) {
// // // // // 		handle(this.response)
// // // // // 	}
// // // // // }
// // // // // xhr.setRequestHeader('Accept', 'application/json')
// // // // // xhr.responseType = 'json'
// // // // // xhr.send('{"name":"xz"}')
// // // // // function handle (data) {
// // // // // 	console.log(data)
// // // // // }
// // // // // const arr = [1,2,3,4]
// // // // // arr.map((i,j,k)=>{
// // // // // 	k[j] = 0
// // // // // 	console.log(arr)
// // // // // })
// // // // const obj = {
// // // // 	fun(){
// // // // 		console.log(this === obj)
// // // // 		const o = {
// // // // 			foo:()=>{
// // // // 				console.log(this=== obj)
// // // // 			}
// // // // 		}
// // // // 		return o.foo
// // // // 	}
// // // // }
// // // // const a = obj.fun()
// // // // a()
// // // // function Person(){
// // // // 	this.name = 'xz'
// // // // }
// // // // function Boss(age){
// // // // 	this.age=age
// // // // }
// // // // Function.prototype = {
// // // // 	say(){
// // // // 		console.log('ok')
// // // // 	},
// // // // 	a:10
// // // // }
// // // // Boss.prototype = Person
// // // // const bo = new Boss(10)
// // // // const p = new Person()
// // // // console.log(Person.__proto__,Function.prototype)

// // // Object.prototype.a = function(){
// // // 	console.log('obj-tostring')
// // // }
// // // Function.prototype.a = function(){
// // // 	console.log('fun-tostring')
// // // }
// // // Object.a()\
// // function add (a, b, c) {
// // 	return a + b + c
// // }
// // function curry (fn) {
// // 	return function ad (...args) {
// // 		if (args.length === fn.length) {
// // 			return fn(...args)
// // 		} else {
// // 			return function (...otherArgs) {
// // 				return ad(...args, ...otherArgs)
// // 			}
// // 		}
// // 	}
// // }
// // const addCurry = curry(add)
// // const add1 = addCurry(1)
// // const add2 = add1(2)
// // console.log(add2(3))


// const obj1 = { name: 'obj1' };
// const obj2 = { name: 'obj2' };
// const obj3 = { name: 'obj3' };

// function getName() {
//   console.log(this.name);
// }

// const fn1 = getName.bind(obj1).bind(obj2).bind(obj3);
// fn1(); // 输出 "obj1"

Function.prototype.myCall = function(target, ...arg){
	const symKey = Symbol()
	target[symKey] = this
	const result = target[symKey](...arg) 
	delete target[symKey]
	return result
}
// bind
Function.prototype.myBind = function(target, ...arg) {
	const _this = this
	return function(...innerArg){
			return _this.myCall(target, ...arg, ...innerArg)
	}
}
const A = {
	name:'xz',
	say(n, m){
			console.log(`----${this.name}---${n}---${m}----`)  
	}
}
const B = {
	name:'xx'
}


const bindReturn = A.say.myBind(B, 2).myBind(A,1)
bindReturn()
//----xx---2---bind----