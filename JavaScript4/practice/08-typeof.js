console.log(
  typeof 0,                     // number
  typeof 'A',                   // string
  typeof true,                  // boolean
  typeof undefined,             // undefined
  typeof Symbol(),              // symbol
  typeof null,                  // object
  typeof new Array(),           // object
  typeof new Object(),          // object
  typeof new Function(),        // function
  typeof (() => {}),            // function
  typeof new RegExp(),          // object --ie 与 fireFox 中会返回 object, safari5,chrome7 返回 function;只要实现了内部方法 [[call]] 规定返回 function
  typeof new Date()             // object
)
