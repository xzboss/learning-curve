// // yield* 委托
// function* func(n) {
//     yield 1
//     yield* [2, 3]
//     yield 4
// }
// const g = func()
// // yield* 将等价与 yield 2; yield 3;
// // 这叫委托：yield* 委托给另一个可迭代对象或者生成器对象
// console.log(
//     g.next(), // {value: 1, done: false}
//     g.next(), // {value: 2, done: false}
//     g.next(), // {value: 3, done: false}
//     g.next(), // {value: 4, done: false}
//     g.next(), // {value: undefined, done: true}
// )

// yield* 的值
// 关联的迭代器 done 为 true 的 value 值
// 关联的生成器函数：函数返回值


// // 实现递归
// function* nTimes(n) { 
//     console.log('@@@')
//     if (n > 0) { 
//         yield* nTimes(n - 1); 
//         yield n - 1; // 返回的值来自这里，也就是说 yield* 不会暂停
//     } 
// } 
// for (const x of nTimes(3)) { 
//     console.log(x); 
// }
// // @@@ * 4
// // 0 1 2