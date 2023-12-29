// const wm = new WeakMap()
// const key = {}
// wm.set(key, 'value') // 映射生效
// key = null // 原来的 weakmap键 失去外部引用，weakmap中映射随时被回收

// const wm = new Map()
// const key = {}
// wm.set(key, 'value') // 映射生效
// key = null // map中映射不会回收


// WeakMap 实现私有变量 , 这样其实就是 es6 之前的私有变量做法，不用 weakmap 也行
const User = (()=>{
    const wm = new WeakMap()
    class User {
        constructor(name, id, age){
            wm.set(this, {
                name,
                id,
                age
            })
        }
        get(key){
            return wm.get(this)[key]
        }
        set(key, value){
            wm.set(this)[key] = value
        }
    }
    return User
})()
const user = new User('xz', '001', '19')
console.log(user.get('name'), user.get('id'), user.get('age')) // xz 001 19

