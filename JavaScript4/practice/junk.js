// class Person{
//     constructor(name){
//         this.name = name
//     }
//     sayName=()=>{
//         console.log(this.name)
//     }
// }
// const person = new Person('111')
// const person2 = new Person('222')
// person.sayName()
// person2.sayName()
// console.log(person.sayName === person2.sayName,Person.sayName)
// const search = '?q=javascript&name=xz&%10=%20'
// const qs = search.substring(1)
// const obj = {}
// qs.split('&').forEach(item => {
//   const str = item.split('=')
//   obj[decodeURIComponent(str[0])] = decodeURIComponent(str[1])
// })
// console.log(obj)

class URLSearchParams {
  params = {}
  constructor(qs) {
    if (typeof qs !== 'string') throw new TypeError('option must be a string')
    qs = qs.substring(1)
    qs.split('&').forEach(item => {
      const [key, value] = item.split('=')
      this.params[encodeURIComponent(key)] = encodeURIComponent(value)
    })
  }
  has(key) {
    return this.params[key] !== undefined
  }
  get(key) {
    return this.params[key]
  }
  delete(key) {
    delete this.params[key]
  }
  [Symbol.iterator] = () => {
    return Object.entries(this.params)[Symbol.iterator]()
  }
}
let qs = '?q=javascript&num=10'
let searchParams = new URLSearchParams(qs)
for (let param of searchParams) {
  console.log(param)
}
console.log(searchParams.has('q'), searchParams.get('q'), searchParams.delete('q'), searchParams.has('q'))
