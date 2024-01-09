function test(func) {
  const start = new Date().getTime()
  func()
  const end = new Date().getTime()
  console.log(end - start)
}
// speed fast -> slow
test(() => {
  const arr = new Array(10000000).fill('0')
})
test(() => {
  const arr = new Array(10000000)
  for (let i = 0; i < 10000000; i++) {
    arr[i] = 0
  }
})
// test(() => {
//   const arr = new Array(10000000).fill('0')
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i
//   }
//   arr.indexOf(999999)
// })
// test(() => {
//   const arr = new Array(10000000).fill('0')
//   for (let i = 0; i < 1000000; i++) {
//     arr[i] = i
//   }
//   for (let i = 0; i < 1000000; i++) {
//     if (arr[i] === 999999) break
//   }
// })
