// function func(){
//     foo()
// }
// const obj = {
//     foo(){
//         console.log(foo.caller)
//     }
// }
// function foo(){
//     console.log(foo.caller)
// }
// foo()
// foo()
// fun() // ReferenceError: fun is not defined
// {
//   function foo(){ }
//   var fun = function(){ }
// }
// 'use strict'
// function dfs(x){
//   return dfs(x + 1)
// }
// dfs(1)

// const overall = 'overall'
// function container(){
//   const x = 'x'
//   function inner(){
//     const y = 'y'
//     return function content(){
//       const z = 'z'
//     }
//   }
//   return inner()
// }
// console.dir(container())

// // const overall = 'overall'
// // function container(){
// //   const x = 'x'
// //   function inner(){
// //     const y = 'y'
// //     return function content(){
// //       const z = 'z'
// //       const closure = x + y
// //     }
// //   }
// //   return inner()
// // }
// // console.dir(container())

// (function(){
//   foo = function(){

//   }
// }
  
// )()
// console.log(foo)
const foo = ()=>{

}

console.log(function(){}.name === '')