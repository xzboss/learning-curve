function getPromise(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
}

const asyncArr = [
  getPromise(30, 3000),
  getPromise(20, 2000),
  getPromise(10, 1000)
]

;(async function () {
  for await (const item of asyncArr) {
    console.log(item)
  }
})()
// 30 20 10
