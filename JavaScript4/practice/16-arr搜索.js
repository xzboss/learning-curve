const arr = [1, 2, 3]
arr.indexOf(search, startIdx)     // -1 || idx
arr.lastIndexOf(search, startIdx) // -1 || idx
arr.includes(search)              // boolean

arr.find((element, index, arr) => element === 1)
arr.findIndex((element, index, arr) => element === 1)