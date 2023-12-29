// function func(){
//     console.log(b, c)
//     eval('let a = 1; var b = 1; function c(){}')
//     console.log(a, b, c)
// }
function foo(){
    console.log(b, c)
    let a = 1; var b = 1; function c(){};
    console.log(a, b, c)
}

// func()
foo()
// 0 1 F