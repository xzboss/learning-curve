console.log(
    +0 === 0,
    -0 === 0,
    +0 === -0,
    NaN === NaN
)
console.log(
    Object.is(+0, 0),
    Object.is(-0, 0),
    Object.is(+0, -0),
    Object.is(NaN, NaN),
)
//true true  true  false
//true false false true