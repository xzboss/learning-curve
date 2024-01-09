function test(func) {
  const start = new Date().getTime()
  func()
  const end = new Date().getTime()
  console.log(end - start)
}
//speed fast -> slow
test(() => {
  const arr = new Array(10000000).fill('0')
})
test(() => {
  const map = {}
  for (let i = 0; i < 10000000; i++) {
    map[i] = 0
  }
})
