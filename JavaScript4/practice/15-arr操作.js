// /**
//  * concat(...)
//  * 不操作原数组
//  * 默认展开一层
//  * Symbol.isConcatSpreadable 控制是否展平
//  * */
// const arr = [1, 2]
// const plus = [40, 50]
// plus[Symbol.isConcatSpreadable] = false
// console.log(
//     arr.concat(3, [4, [5]]), // [1, 2, 3, 4, [5]]
//     arr.concat(3, plus), // [1, 2, 3, [40, 50]]
// )

// /**
//  * slice(startIdx, endIdx)
//  * 不操作原数组
//  * 负数转化为 length + (负数)
//  * 始终从左到右，与 string.slice 一样
//  * */
// const arr = [1, 2, 3, 4]
// console.log(
//     arr.slice(1, 2), // [2]
//     arr.slice(1, 5), // [2, 3, 4]
//     arr.slice(-1, 2) // []
// )

// /**
//  * splice(startIdx, count, fillContent1, fillContent2...)
//  * 操作原数组
//  * */
// const arr = [1, 2, 3, 4]
// console.log(
//     arr.splice(0, 2, 'fill'), // [ 1, 2 ]
//     arr // [ 'fill', 3, 4 ]
// )

