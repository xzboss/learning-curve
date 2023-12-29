const arr = [1, 2, 3, 4, 5]
console.log(
    arr.reduce((pre, cur, index, arr) => pre + cur) // 15
    //初始：      1    2     1    arr
    //之后：   return  3     2    arr
)
