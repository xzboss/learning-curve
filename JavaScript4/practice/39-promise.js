'use strict'
class Promise {
  status = 'pending'
  result = null
  fulfilledCallback = () => {}
  rejectedCallback = () => {}
  constructor(executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  resolve = value => {
    if (this.status !== 'pending') return
    this.status = 'fulfilled'
    this.result = value
    setTimeout(() => this.fulfilledCallback(value), 0)
  }
  reject = reason => {
    if (this.status !== 'pending') return
    this.status = 'rejected'
    this.result = reason
    setTimeout(() => this.rejectedCallback(reason), 0)
  }
  then = (onFulfilled, onRejected) => {
    const p = new Promise((resolve, reject) => {
      if (typeof onFulfilled !== 'function' || typeof onRejected !== 'function') {
        throw Error('must be a function')
      }
      this.fulfilledCallback = value => {
        let result
        try {
          result = onFulfilled(value)
          // 如果返回 promise
          if (result instanceof Promise) {
            result.then(resolve, reject)
          } else {
            resolve(result)
          }
        } catch (error) {
          reject(error)
        }
      }
      this.rejectedCallback = reason => {
        const result = onRejected(reason)
        reject(result)
      }
    })
    return p
  }
}
const p = new Promise((resolve, reject) => {
  // setTimeout(() => {
  resolve('resolve')
  // }, 2000)
})
const onFulfilled = value => {
  console.log(value)
}
const onRejected = reason => {
  console.log(reason)
}
p.then(
  value => {
    console.log(1)
    // throw Error('err')
    return new Promise((resolve, reject)=>{
        resolve(p)
    })
  },
  reason => {
    return reason
  }
).then(onFulfilled, onRejected)
console.log(p)
