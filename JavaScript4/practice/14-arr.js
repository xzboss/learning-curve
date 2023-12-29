// const obj = {
//     name: 'xuzhou'
// }
// console.log(
//     new Array(2, 4),                           // [2, 4]
//     new Array(2),                              // [empty, empty]
//     Array.of(2),                               // [2]
//     Array.of(2, 4),                            // [2, 4]
//     Array.from(([1, 2])),                      // 浅拷贝
//     Array.from(new Map().set(1, 2).set(3, 4)), // [[1, 2], [3, 4]]
//     Array.from(new Set().add(1).add(2)),       // [1, 2]
//     Array.from({0: 0, 1: 100, length: 3}),     // [0, 100, undefined] 必须要指定 length 才行
//     Array.from({                               // [1, 2, 3]
//         *[Symbol.iterator](){                  //
//             yield 1                            //
//             yield 2                            //
//             yield 3                            //
//         }                                      //
//     }),                                        //
//     Array.from([1, 2, 3], function(v){         // [1, 4, 9]
//         this[v] = v                            //
//         return v ** 2                          //
//     }, obj),                                   //
//     obj                                        // { '1': 1, '2': 2, '3': 3, name: 'xuzhou' }
// )

// // 数组空位
// // 方法都会跳过空的情况，并且 map 会保留空值返回
// const arr = [1,,,,,5]
// console.log(
//     arr.map(v => {console.log(v); return v}),   // 1 5
//     arr.forEach(v => console.log(v)),           // 1 5
//     arr.some(v => console.log(v)),              // 1 5
//     arr.every(v => {console.log(v);return true})// 1 5
// ) // [ 1, <4 empty items>, 5 ] undefined false true

// for (const item of arr) {
//     console.log(item) // 1 undefined undefined undefined 5
// }
// for (const key in arr) {
//     console.log(key, '=>', arr[key]) // 0=>1 5=>5
// }
// console.log([...arr]) // [1, undefined, undefined, undefined, 5]

// 对于 start end 大小相反，超出，负数都直接啥也不干
arr.fill(n, (start = 0), (end = length)) // [)
arr.copyWithin(startFill, (start = 0), (end = length)) // [)
const arr = [1, 2, 3, 4, 5, 6, 7]
arr.copyWithin(2, -1, -1)
console.log(arr)
