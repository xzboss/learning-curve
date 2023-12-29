const arr = [1, 2, 3, 4]
console.log(
  arr[Symbol.iterator] === arr.values, // true 称迭代器工厂函数
  arr[Symbol.iterator]() // 返回值称迭代器
)

// 满足迭代器工厂函数与迭代器工厂函数返回迭代器称：可迭代协议
// 自定义可迭代协议
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
          return { done: false, value: idx++ } // 称 iteratorResult 对象
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
const iter = new iterator(3)
for (const value of iter) {
  console.log(value) // 1 2 3
}

// 让对象变为可迭代对象，（但其实不这么干，都用 Object.keys 即可）
const obj = {
  name: 'Tom',
  age: '19',
  weight: '140',
  [Symbol.iterator]() {
    const keys = Object.keys(this)
    const self = this
    let idx = 0
    return {
      next() {
        if (idx < keys.length) {
          return { done: false, value: self[keys[idx++]] } // 称 iteratorResult 对象
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
for (const item of obj) {
  console.log(item) // Tom 19 140
}
