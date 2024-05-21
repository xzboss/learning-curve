'use strict'
function foo(a,b){
    console.log(b)
    arguments[1] = 99
    console.log(b)
}
foo(1,2)