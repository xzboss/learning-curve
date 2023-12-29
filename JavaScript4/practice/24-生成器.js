// 生成器对象当做可迭代对象
// function* func() {
//     yield 1
//     yield 2
//     yield 3
// }
// const g = func()

// for (const i of g) {
//     console.log(i) // 1 2 3
// }

// // yield 输入输出 (这里好扯md) ① 暂时：第一次 next 并不会执行第一个 yield 所在语句，但是会返回 yield 表达式的值
// function* func(n) {
//     console.log(n)
//     console.log('@', yield 1)
//     console.log('@@', yield 2)
//     console.log('@@@', yield 3)
// }
// const g = func('X')
// // next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
// console.log(
//     g.next('A'), // {value: 1, done: false}         // 上面 log 输出 X
//     g.next('B'), // {value: 2, done: false}         // 上面 log 输出 @ B
//     g.next('C'), // {value: 3, done: false}         // 上面 log 输出 @@ C
//     g.next('D')  // {value: undefined, done: true}  // 上面 log 输出 @@@ D
// )

// // yield 输入输出 ②
// function* func(n) {
//     yield yield 100
// }
// const g = func(1)
// // next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
// console.log(
//     g.next(2), // 同一行最右边那个 yield 100 执行，返回 {value: 100, done: false}
//     g.next(3), // 上一次表达式的值已经被丢弃，返回的是 yield 关键字的值，而这次传递参数为 3，所以返回 {value: 3, done: false}
// )

// // yield 输入输出 ③
// function* func(n) {
//     return yield 1
// }
// const g = func('X')
// // next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
// console.log(
//     g.next('A'), // {value: 1, done: false}
//     g.next('B'), // {value: B, done: true}
// )
