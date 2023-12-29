// const arr = [2]
// arr.valueOf = function () {
//   console.log('valueOf @@@')
//   return Array.prototype.valueOf.call(arr) // 【2】
// }
// arr.toString = function () {
//   console.log('toString @@@')
//   return Array.prototype.toString.call(arr) // '2'
// }
// console.log(arr > 0)
// // valueOf @@@
// // toString @@@
// // true

// const arr2 = [2]
// arr2.value = '99'
// console.log(arr2.value)

// console.log(Array.__proto__ === Object.prototype)

// //valueof实现迭代
// const arr9 = [1, 2, 3, 4, 5]
// let i = 0
// arr9.valueOf = function () {
//   return arr9[i++]
// }
// console.log(+arr9, +arr9, +arr9)

console.log(
  Infinity * 1,
  -Infinity * 1,
  Infinity * 0,
  -Infinity * 0,
  Infinity * -1,
  -Infinity * -1,
  NaN * 1
)
console.log(
  Infinity / Infinity,  // NaN
  0 / 0,                // NaN
  3 /0 ,                 // Infinity
  -0 - +0,
  null == undefined,
  null == 0,
  undefined == 0
)



