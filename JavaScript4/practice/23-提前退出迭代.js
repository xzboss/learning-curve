const arr = [1, 2, 3, 4, 5]
const iter = arr[Symbol.iterator]()
iter.return = function () {
  console.log('arr iter return')
  return { done: true }
}
for (const item of iter) {
  if (item > 3) {
    break // return执行了，但是并没有终止
  }
  console.log(item) // 1 2 3 arr iter return
}
for (const i of iter) {
  // 这次会继续上次的迭代
  console.log(i) // 5
}

/**
 * ----
 */
class iterator {
  constructor(counter) {
    this.counter = counter
  }
  [Symbol.iterator]() {
    let idx = 1,
      counter = this.counter
    return {
      next() {
        if (idx <= counter) {
          return { done: false, value: idx++ }
        } else {
          return { done: true, value: undefined }
        }
      },
      return() {
        console.log('my iter return')
        return { done: true }
      }
    }
  }
}
const iter2 = new iterator(5)
for (const value of iter2) {
  if (value > 3) {
    break // 迭代器提前终止
  }
  console.log(value) // 1 2 3 my iter return
}
for (const value of iter2) {
  // 这次会调用工厂函数产生不同的迭代器实例，重新开始迭代
  console.log(value) // 1 2 3 4 5
}
