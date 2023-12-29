// const set = new Set([NaN, NaN])
// // 特例，内部判定 NaN 相等
// console.log(set) // { NaN }

// 顾名思义
// size
// add(): set
// has(): boolean
// delete(): boolean
// clear()

// 行为基本与 map 一致；其实可以理解为键值相等的 map
const set = new Set([1, 2, 3, 4]) // { 1, 2, 3, 4 }
set.values === set[Symbol.iterator] // true
set.entries() // {[1, 1], [2, 2], [3, 3], [4, 4]}
