const map = new Map()
// 键判断依据为全等，NaN 除外
// 例外
const nan = NaN
map.set(nan, 'ok')

console.log(
    NaN == NaN,  // false
    map.get(NaN), // ok
    map.entries === map[Symbol.iterator], // true
    map.clear()
)