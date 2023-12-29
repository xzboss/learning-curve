

// const str = 'ABCDEFG'
// console.log(
//     str.slice(0, 2),        // AB
//     str.slice(0, -1),       // ABCDEF
//     str.slice(0, -2),       // ABCDE
//     str.slice(-1, 2),       // ''
//     str.slice(-2, -1),      // F
//     str.substring(0, 2),    // AB
//     str.substring(2, 0),    // AB
//     str.substring(-1, 2),   // AB
//     str.substring(-2, 2),   // AB
//     str.substring(2, -1)    // AB
// )
// // slice:       负数转化为 length + 负数
// // substring:   负数全部转化为0，且始终从小参数到大参数

// const str2 = 'ing'
// console.log(str2.padStart(100,'-'))
// console.log('string'.iterator) //un
// for (const it of 'object') {
//     console.log(it)
    
// }

// console.log(...'abcd')
// let text = "cat, bat, sat, fat"; 
// result = text.replace(/.at/g, "word$1--"); 
// console.log(result);

// const query = '?id=99999&name=xz&age=18'
// const obj = {}
// query.replace(/([^&?]+)=([^&]*)/gi,(match, $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11, origin)=>{
//     console.log($n)
    
// })
// console.log(obj)

const query = 'a1a2a3a4a5a6a7a8a9a10a11a12'
const obj = {}
query.replace(/(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8)(a9)(a10)(a11)/gi,(match, $1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11, origin)=>{
    console.log($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
    
})
console.log(obj)
// const time = Date.now()

// for (let i = 0; i <10000000;i++ ) {
//     const a = [...'123456789']
// }
// const endTime = Date.now()
// console.log(endTime-time)




