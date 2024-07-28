## <link rel="stylesheet" type="text/css" href="./md.css" />

## theme: cyanosis

<a name="QM0tJ"></a>

## 第一章，javascript的组成

1.  ECMAScript
2.  DOM(W3C标准)
3.  BOM(不同浏览器实现有些有所不同，趋于标准中) <a name="wwft7"></a>

## 第二章，HTML中的javascript

<a name="cfDnp"></a>

### <script></script>

> 标签中不能直接出现字符串是还未结束标签，如"</script>","</html>"
> 必须要转义"\</script>","\</html>"

1.  属性
    1.  **async**：异步加载外部 js 引用，多个 async 的 script 标签不一定会按书写顺序执行
    2.  **defer**：异步加载外部 js 引用，多个 defer 的 script 标签会严格按照书写顺序执行
    3.  **src**：获取外部 js 代码的 url ，允许获取不同域内容
    4.  **crossorigin**：配置相关请求的 cors 设置，！不懂
    5.  \*\*integrity：\*\*允许比对接收收到的资源和指定加密签名以验证字资源的完整性
    6.  **language**：废弃
    7.  **charset**：指定字符代码集
    8.  **type**：表示代码块中的脚本语言类型（MIME类型）
        1.  值未`module`即可在代码中使用 import export <a name="nF36r"></a>

### <noscript></noscript>

在不支持 js 的浏览器和禁止渲染 js 时才会渲染标签内内容 <a name="eggxU"></a>

## 第三章，语言基础

<a name="V9nMe"></a>

### 散碎

1.  严格模式

```javascript
"use strict"; //全局严格模式
function fun() {
  "use strict"; // 局部严格模式
}
```

2.  关键字 with：非常不建议使用，会造成数据泄露，此内容作了解即可

```javascript
let obj = {
  a: 1,
};
function fun() {
  with (obj) {
    a = 2;
    b = 2;
  }
}
fun(obj);
console.log(obj); //{a:2}
console.log(b); //2
```

3.  with 原理：LHS & RHS 搜索
    1.  LHS：如果需要对变量赋值，并不关心变量原来的值；比如 `a = 2`，此处 a 用到 LHS 查询
    2.  RHS：如果需要获取到变量的值；比如 `let c = a`，此处 a 用到 RHS 查询

> 当在严格模式下，LHS 和 RHS 失败都会抛出 **ReferenceError** 错误；非严格模式下 LHS 搜索会自动创建一个隐式全局变量，且标识符为 LHS 引用目标

<a name="M6usx"></a>

### 声明 var 与 let

1.  啦啦啦
2.  var 为函数作用域，let为块作用域
3.  暂时性死区：var 会有变量提升

```javascript
function fun() {
  console.log(a); //undefined
  // 在作用域中用var，相当与在作用域最开始就会执行 var a
  //再到此语句才会执行 a = 0
  var a = 0;
  console.log(a); // 0
}
function fun1() {
  console.log(a); //报错
  let a = 0; // 定义及赋值都发生在此处
}
```

3.  冗余声明：var 可以重复声明相同变量名（js解析引擎会自动将所有同级提升至顶部合成一次声明），let 不行
4.  全局下用 var 声明的变量会变成 window 的属性
5.  不用 关键字 声明直接赋值，没有变量提升，不管怎样都会会成为全局属性 （严格模式不能这样写，平时也不建议这样写）

```javascript
x = 1;
console.log(window.x); // 1
console.log(window.y); // 报错
y = 2;
```

> 这个真是太叼了，居然可以和 python 一样（手动滑稽）

6.  循环中的 var 与 let
    1.  for 循环中的 () 中的 var 声明变量会泄露至全局；let 则不会

```javascript
for (var i = 0; i < 5; i++) {
  //code...
}
console.log(i); // 5

for (let j = 0; j < 5; j++) {
  //code...
}
console.log(j); // undefined
```

2.  关于 var 对迭代变量的奇特使用

```javascript
//按照期望我们希望他输出0 1 2 3 4
//原因在于每次输出的i都是同一个变量，且输出操作是在循环遍历完成后再执行的
//即执行超时变量
for (var i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0); //5 5 5 5 5
}

/*
	两种解决方案
  	1.闭包
  	2.使用let声明迭代变量
*/
//闭包
for (var i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(() => {
      console.log(i);
    }, 0); //0 1 2 3 4
  })(i);
}
//let
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0); //0 1 2 3 4
}
```

> 闭包与 let 能解决此类问题原理
>
> 1.  闭包：用一个立即执行函数将所要执行的代码包裹起来将当前的迭代变量（此时变量还是正确形式）作为实参传入给函，函数的形参就会被赋值成实参值，而这两个参数现在是互不影响的，而且所要执行的代码引用的是函数内部的形参，即正确的值。
> 2.  let：用 let 声明迭代变量，js 引擎会在后台为每一个迭代循环生成一个新的迭代变量，所以我们所要执行的异步代码引用的都是不同的变量实例。

<a name="K9UMa"></a>

### const

1.  声明时必须初始化
2.  赋值后不可修改
3.  不允许冗余声明
4.  为块级作用域
5.  const 的限制只适用于它指向的变量的引用；换句话说就是当 const 声明一个对象时，那么只要引用不变，就不会报错，可以修改对象的属性
6.  浅谈 const 在 for-in 与 for-of 中与 for循环中的区别

```javascript
/*
	首先因该明确的是：
    在 for 循环中不能使用 const 声明迭代变量
    在 for-in 与 for-of 中建议使用 const
*/
for (const key in { a: 1, b: 2 }) {
  console.log(key); //a b
}
for (const key of { a: 1, b: 2 }) {
  console.log(key); //1 2
}
//for-in 与 for-of 是严格迭代模式
//这就意味着每次循环 js 引擎都会单独创建一个块级作用域来完成每个变量的行为
//而在 for 循环中始终是同一个块级作用域
```

> 1.  避免使用 var
> 2.  const 主，let 次之

<a name="pw3oP"></a>

### 数据类型

<a name="Gsz2r"></a>

#### 4.1 概要

六种见原始数据类型：Undefined，Null，Number，String，Boolean，Symbol（符号）<br />复杂类型：Object <a name="hHtlX"></a>

#### 4.2 区分类型操作符：typeof

1.  typeof null;会返回 "object"（因为 null 被认定为是空对象的引用） <a name="TtBnq"></a>

#### 4.3 undefined 与 null

1.  undefined：声明了但是未赋初值的变量都会是这个值（不建议赋值，因为意义不大）
2.  null：空对象的引用（建议在声明一个对象且不知道此对象具体引用时赋初值 null，与 undefined 区分开来）

```javascript
if (undefined || null) {
  /* 不会执行 */
}
console.log(undefined == null); // true
console.log(undefined === null); // false
```

3.  未声明的变量只能执行一个有用的操作 typeof；不然都会报错（非严格模式下可以执行delete） <a name="NPsVK"></a>

#### 4.4 Boolean

1.  Boolean(option); 转换参数转为布尔值
2.  转换为 false 的值有：null，undefined，""，0，false，NaN <a name="Xfsfn"></a>

#### 4.5 Number （TODO：这里我自己都不想看这样的文字笔记，以后重新写）

1.  赋值不同进制数
    1.  八进制：
        1.  非严格模式下：`let num = 0123`
        2.  严格模式下：`let num = 0o123`
    2.  十六进制：`let num = 0x123`

> js 中 +0 与 -0 被认定为相同

2.  浮点数
    1.  小数点后面只有 0 的话会自动转为整数
    2.  科学计数法 `let num = 1.2e10`
    3.  浮点数之间的运算有时会产生不可预料的结果：
        1.  `0.1 + 0.2` // 0.30000000000000004
        2.  产生这种错误是因为使用了 IEEE754 数值
3.  值的范围
    1.  Number.MIN_VALUE：js 所能表示的最小数；5e-324
    2.  Number.MAX_VALUE：js 所能表示的最大数；1.7976393....e+308
    3.  Number.NEGATIVE_INFINITY：-Infinity
    4.  Number.POSITIVE_INFINITY：Infinity
4.  NaN
    1.  isNaN(option)：会调用 option 的 valueOf() 函数，isNaN() 内判断返回结果能否转换为数值类型，如果不能，再继续调用 toString()，再看能否转换为数值类型，如果还是不能， isNaN() 返回 true
5.  数值转换
    1.  Number(option)
        1.  null：0
        2.  undefined：NaN
        3.  字符串
            1.  '0010'：忽略开头所有 0 ，转换为 10
            2.  '001.1'：忽略开头所有 0 ，转换为 1.1
            3.  '0x10'：不忽略首 0，转换为 16
            4.  ''：0
            5.  'x9z'：NaN
            6.  other（字符串首字母不是 - ，+ 或 数值字符）：NaN
        4.  对象：会调用 option 的 valueOf() 函数，Number() 内判断返回结果能否转换为数值类型，如果不能，再继续调用toString()，再看能否转换为数值类型，如果还是不能， Number() 返回 NaN
    2.  parseInt(option, option)
        1.  null：NaN
        2.  undefined：NaN
        3.  字符串
            1.  '0010'：忽略开头所有 0 ，转换为 10（如果指定了第二个参数为 8，那会忽略首 0）
            2.  '001.1'：忽略开头所有 0 ，转换为 1（如果指定了第二个参数为 8，那会忽略首 0）
            3.  '0x10'：不忽略首 0，转换为 16
            4.  ''：0
            5.  other（字符串首字母不是 - ，+ 或 数值字符）：NaN
            6.  如果指定了第二个参数，那第一个参数中前面的 0 或 0x会被忽略
        4.  对象：会调用 option 的 valueOf() 函数，parseInt() 内判断返回结果能否转换为数值类型，如果不能，再继续调用toString()，再看能否转换为数值类型，如果还是不能， parseInt() 返回 NaN
    3.  parseFloat(option)：与paresInt() 类似
        1.  他会匹配第一个小数点后的字符数值
        2.  始终忽略前面的 0 <a name="nYehg"></a>

#### 4.5 string （TODO：同上）

1.  字符字面量
    1.  '，''，······
    2.  \xnn：以十六进制编码代表的字符；\x41 代表 "A"
    3.  \unnnn：以十六进制编码代表的 unicode 字符；\u03a3 代表 "Σ"

> 一个字符字面量长度为 1

2.  特点：可以以下标形式访问，但是不能以下标形式修改

```javascript
let s = "hello world";
console.log(s[0]); // h
s[0] = "a"; // 报错
```

3.  转换为字符串
    1.  .toString()：除了 null 与 undefined，其他类型都有 toString 方法
        1.  返回值：调用对象的字符串等价物（不影响原对象）
        2.  如果调用对象是数值时：可以传入一个参数，代表需要转换成的几进制形式字符串
    2.  String(option)：转型函数
        1.  如果需要将 null 或 undefined 转换为字符串，可以用此
        2.  其实 String() 的原理就是判断传入参数是否为 null 或 undefined，如果不是就调用传入参数的 toString 方法，否则返回 null 或 undefined 的字符串形式
4.  模板字符串：原理是调用插入的对象的 toString 方法（null undefined 除外❓（这里我不知到null和undefined在模板字符串中怎么处理的）），将返回值与字符串进行拼接

```javascript
let obj = {
  x: 1,
  y: 2,
  toString() {
    return "hello world";
  },
};
console.log(`${obj}`); // hello world
/*  */
console.log(`${[]}`); // 空
console.log(`${[1, 2]}`); // 1,2
```

> 这里说一下关于 对象 { } 的 toString() 为何返回的是 \[Object Object]；（\[对象类型 构造函数]）
>
> 1.  在底层代码中，对象的 toString() 返回的是对象类型的字符串，（这对判断类型很有用，比 typeof 运算符还有用）

```javascript
function fun() {
  //code...
}
let n = 0;
console.log(Object.prototype.toString.call(fun)); // [Object Function]
console.log(Object.prototype.toString.call(n)); // [Object Number]
```

5.  模板字符串标签函数

```javascript
let x = 1;
let y = 3;
let z = 2;
function fun(strings, ...options) {
  console.log(strings, "\n", options);
}
fun`${x} + ${y} - ${z} = ${x + y - z}`;
// [ '', ' + ', ' - ', ' = ', '' ]
// [ 1, 3, 2, 2 ]
```

> strings 的长度总是比 options 长 1 ，
> strings 是依照插值语法分割成的字符串数组
> options 则是所有插值语法结果值组成的数组

6.  原始字符串

当模板字符串中带有转义字符或 uncode 等代码时，如何获取到他的原始字符串

```javascript
/* 默认标签函数String.raw */
console.log(String.raw`A\nB`); // A\nB

/* 对于本来就是换行的字符串不行 */
console.log(String.raw`A
B`);
//A
//B

/* 标签函数第一个参数会自动加上一个 raw 属性 */
function getRawStr(strings) {
  console.log(["\n", "\t"]);
  console.log(strings);
}
getRawStr`\n${"-"}\t`;
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9197c8688691431d89bb13c6733b22cd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=276&h=134&s=7150&e=png&b=202124) <a name="FtLzo"></a>

#### 4.6 Symbol （TODO：没看完）

1.  基础使用

```javascript
const sy = Symbol("description");
console.log(sy); // Symbol('description')
```

> 注意事项
>
> 1.  原始类型，唯一，不可变
> 2.  无字面量语法
> 3.  不能 new

2.  全局符号注册表 Symbol.for('description')

- 此方法返回一个符号类型，如果全局符号表中有此描述符所描述的符号，则返回此符号；如果全局符号表中没有则创建一个新符号并放入全局符号注册表并返回
- 此方法底层执行幂等操作
- 描述符必须要是字符串如果不是字符串会将其装换为字符串

```javascript
let Sy = Symbol.for("foo"); // 创建新符号
let otherSy = Symbol.for("foo"); // 重用已有符号
console.log(Sy === otherSy); // true

let emptyGlobalSymbol = Symbol.for();
console.log(emptyGlobalSymbol); // Symbol(undefined)
```

- Symbol.keyFor() 接收符号为参数，返回全局符号注册表中此符号的描述，如果全局符号注册表中没有则返回 undefined

```javascript
let s2 = Symbol("bar"); // 创建普通符号
console.log(Symbol.keyFor(s2)); // undefined
//如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError：
Symbol.keyFor(123); // TypeError: 123 is not a symbol
```

<a name="h1tKU"></a>

#### 4.7 Object （后面详细讲）

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/268445d191724f3987da04ef23775959~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=846&h=26&s=25203&e=png&b=dce561) <a name="O2dIo"></a>

### 操作符

<a name="a2PUp"></a>

#### -- ++ + - === 等

<a name="QMF53"></a>

#### 5.2 操作符的隐式转换

```javascript
const arr = [2];
arr.valueOf = function () {
  console.log("valueOf @@@");
  return Array.prototype.valueOf.call(arr); // [2]
};
arr.toString = function () {
  console.log("toString @@@");
  return Array.prototype.toString.call(arr); // '2'
};
console.log(arr > 0);
// valueOf @@@
// toString @@@
//这里中间还执行了 Number(arr)
// true
```

<a name="MUBh5"></a>

#### 5.3 一元 + 与 -

+与 Number() 无异，- 则是 Number() 后取负 <a name="XCd2s"></a>

#### 5.4 \~ 与 ^

\~ : 位取反<br />^ : 位同为 0 ，异为 1 <a name="KZMkc"></a>

#### 5.5 >> 与 >>> 与 <<

<< >>: 保留符号位<br />>>> : 有符号右移: 符号位脱离表示数值 <a name="KfuBW"></a>

#### 5.6 || 与 &&

将操作数隐式转换<br />表达式返回操作数，并不是返回布尔值

```javascript
null || null; // null
null && null; // null
true && null; // null
```

<a name="ivjqd"></a>

#### 5.7 \* 与 / 与 + 与 - 与 === 与 !== 与 == 与 !=

```javascript
//没展示出来的要么我不知道，要么就是正常思维
Infinity * 1 - // Infinity
  Infinity * 1; // -Infinity
Infinity * 0 - // NaN
  Infinity * 0; // NaN
Infinity * -1 - // -Infinity
  Infinity * -1; // Infinity
NaN * 1; // NaN

Infinity / Infinity, // NaN
  0 / 0, // NaN
  3 / 0; // Infinity

Infinity + -Infinity; // NaN

Infinity -
  -Infinity - // Infinity
  Infinity -
  Infinity + // -Infinity
  0 -
  -0 - // -0
  0 -
  -0 - // +0
  0 +
  -0 - // -0
  0 +
  +0; // +0
```

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c1f4cda72ed84ef5bccc6f8f79528cfe~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=832&h=414&s=27869&e=png&b=ffffff)<br />null 与 undefined 不会进行类型转换，但是 null == undefined<br />NaN == NaN 不会调用 Number(NaN) <a name="VQC5E"></a>

### 语句

<a name="AwyWe"></a>

#### for in 与 for of 与 for await of （TODO: 最后这个待究）

```javascript
for in 用于枚举对象，包括对象（只能是非符号属性（symbol））
for of 用于可迭代对象，拿到的值为为可迭代对象的 next() 所得的 value 值

function getPromise(data, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, delay)
  })
}

const asyncArr = [
  getPromise(30, 3000),
  getPromise(20, 2000),
  getPromise(10, 1000)
]

;(async function () {
  for await (const item of asyncArr) {
    console.log(item)
  }
})()
// 30 20 10
```

> for await 其实请求是同时发起的，但是得到数据按照顺序遍历顺序来的

<a name="KUeCo"></a>

#### 标签语句 与 with （这两货都不建议使用）

```javascript
// 可跳出多层循环
label:
for(...){
  for(...){
    break label
  }
}

// 可跳出内部循环
label:
for(...){
  for(...){
    continue label
  }
}

//with
const store = {
    a: 1,
}
const a = 33
const b = 44
let x, y, z

with(store){
    x = a
    y = b
}
console.log(x, y)
// 1 44
```

> 严格模式直接就用不了 with

<a name="SNb71"></a>

#### switch

> 一句话：条件可以是 变量 或 语句 或 任何值，且比较逻辑为全等；不支持 continue (太棒了，早就觉得switch continue 没有意义了)

<a name="o2oJG"></a>

### 函数

> 严格模式下：参数名不能叫 arguments 或 eval

<a name="Ew45s"></a>

## 第四章，变量、作用域与内存

<a name="kqts2"></a>

### 散碎

<a name="TGssb"></a>

#### 动态属性

```javascript
const a = 1;
const b = new Object(1);
a.name = "test";
b.name = "test";
console.log(a, b); // undefined test
```

> 动态属性的添加有效率问题，每个相同结构的对象共享一个隐藏类（里面记录了各个键的地址距离）

<a name="SWdew"></a>

#### typeof

```javascript
console.log(
  typeof 0, // number ⭐️
  typeof "A", // string ⭐️
  typeof true, // boolean ⭐️
  typeof undefined, // undefined ⭐️
  typeof Symbol(), // symbol ⭐️
  typeof null, // object
  typeof new Array(), // object
  typeof new Object(), // object
  typeof new Function(), // function ⭐️
  typeof (() => {}), // function ⭐️
  typeof new RegExp(), // object --ie 与 fireFox 中会返回 object, safari5,chrome7 返回 function;只要实现了内部方法 [[call]] 规定返回 function
  typeof new Date() // object
);
// 可用于原始值与函数
```

<a name="YiyG3"></a>

### 作用域链增强 （执行上下文，作用域，作用域链，变量对象，活动对象）

> 1.  每个上下文（这里指执行上下文，其实还有什么文本上下文，环境上下文...）都有一个对应的变量对象，而这个变量对象和包含此上下文的上下文的变量对象在一个单向链（每个上下文都有一条自己的链）上，故此叫作用域链
> 2.  所以我们通常说的从上到下从内到外就是按照顺序在作用域链从前往后找
> 3.  作用域链就是对作用域的实现，作用域表示在这个里面创建的变量只能作用于此作用域，一定要和执行上下文区别开来（TODO）
> 4.  函数执行时变量对象会转换为活动对象，因为（变量/活动）对象的属性（不/才）能被访问
> 5.  执行代码时，将需要的上下文放入执行栈，当前上下文执行完毕后会出栈等待后续垃圾回收工作
> 6.  whith 会在作用域链前方添加指定对象作为变量对象，try catch 后的 catch 会将错误对象添加到作用域链前方作为变量对象；
>     1.  ie8 及以前，catch 是在作用域链前方的变量对象上加对象（这就会导致同个上下文能访问到错误对象身上的对象），ie9 及后是在作用域链前方添加变量对象
>     2.  with 中用 var 声明的变量对添加到最接近的上下文的变量对象身上 （with 本身不产生上下文，只是想作用域链前方添加变量对象，var 和 function 关键字声明的变量会提升到最近的全局上下文 或函数上下文 （注：不会提升到最近的 eval 上下文，详情看 eval 例子），这也就能解释为何循环块中 var 的变量能在同个上下文访问了）
> 7.  上下文创建的方式：全局执行上下文，函数执行上下文，eval 函数执行上下文（TODO）
> 8.  作用域是在编译阶段决定的，上下文也是编译时创建，创建上下文后创建变量对象（TODO：这里面好像分词法环境（const,let）和变量环境（var）），执行时变量对象变成活动对象并可访问（也就能理解在赋值前打印 var 是 undefined 了）
> 9.  这书上写着上下文就是作用域，和网上大部分言论相悖TODO；并且提到块级上下文，且每执行到一个上下文都会创建作用域链

```javascript
let number = 1;
function printNumber() {
  console.log(number); //编译阶段就已经决定要用的 number 是来自全局作用域的
}
function log() {
  let number = 2;
  printNumber();
}
log(); // 1
```

> 现在好像变了很多，众口不一：<https://juejin.cn/post/6844903682283143181#heading-9>

<a name="mp3cA"></a>

### 垃圾回收

<a name="afivf"></a>

## 第五章，基本引用类型

<a name="jYr9f"></a>

### Date

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da80e601b1a741aa96c72d8b6a77892d~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=754&h=30&s=9554&e=png&b=fefdfd) <a name="t2URA"></a>

### 原始值包装类型

```javascript
const s = "xuzhou";
const res = s.substring(2); // 按理来说原始值并没有属性，所以不能有substring

//内部处理，实际上 const res = s.substring(2) 等价于:
// const temp = new String('xuzhou')
// res = temp.substring(2)
// temp = null
```

<a name="omnVk"></a>

#### string

> 字符串有迭代器，意味着可以用 for of，也可以用解构 ...

<a name="i6CbO"></a>

##### charAt 与 \[]

```javascript
const str = "AA";
console.log(str[3], str.charAt(3)); // undefined ""
```

<a name="TOf8f"></a>

#### slice 与 substring

```javascript
const str = "ABCDEFG";
console.log(
  str.slice(0, 2), // AB
  str.slice(0, -1), // ABCDEF
  str.slice(0, -2), // ABCDE
  str.slice(-1, 2), // ''
  str.slice(-2, -1), // F
  str.substring(0, 2), // AB
  str.substring(2, 0), // AB
  str.substring(-1, 2), // AB
  str.substring(-2, 2), // AB
  str.substring(2, -1) // AB
);
// slice:       负数转化为 length + 负数
// substring:   负数全部转化为0，且始终从小参数到大参数
// substr:弃用
```

<a name="V7WIH"></a>

#### replace 第二参数为函数 以及 捕获组的概念 以及 正则预查

```javascript
const query = "?id=999&name=xz&age=18";
const obj = {};
query.replace(/([^&?]+)=([^&]*)/gi, (match, $1, $2, origin) => {
  obj[$1] = $2;
});
// match 为整个正则捕获到的 比如第一次就是 id=999
// $1, $2 分别是捕获组 ([^&?]+), ([^&]*) 即 id, 999
// origin 为原始字符串
```

| (?pattern)    | (?!pattern)     | (?<=pattern)  | (?\<!pattern)   |
| ------------- | --------------- | ------------- | --------------- |
| 正向肯定预查  | 正向否定预查    | 反向肯定预查  | 反向否定预查    |
| 后面是\_的str | 后面不是\_的str | 前面是\_的str | 前面不是\_的str |
| str()         |                 | ()str         |                 |

<a name="T5yTz"></a>

#### localCompare

```javascript
const str = "b";
console.log(
  str.localeCompare("a"), // 1
  str.localeCompare("b"), // 0
  str.localeCompare("c") // -1
);
// () 中字符串在前返回 1，在后返回 -1，等返回 0
// 其实我感觉没啥用，他的判断条件和逻辑运算符相同，都是不是码值相加
// 但是采用的编码顺序按照当地的语言决定
```

> 其他还有很多方法，就现用现查即可

<a name="bnTgX"></a>

### 单例内置对象

<a name="UuoiB"></a>

#### globalThis 指向的全局对象（由环境决定）

<a name="si9Xd"></a>

##### encodeURI 与 encodeURIComponent

```javascript
encodeURI(`http://www.xx.com/,:;'"/?[]{}()!@#$%^&*`); //编码范围是url之后，且编码这些 " [ ] { } ^ &
//http://www.xx.com/,:;'%22/?%5B%5D%7B%7D()!@#$%25%5E&*
encodeURIComponent(`http://www.xx.com/,:;'"/?[]{}()!@#$%^&*`); // all 编码 all
//http%3A%2F%2Fwww.xx.com%2F%2C%3A%3B'%22%2F%3F%5B%5D%7B%7D()!%40%23%24%25%5E%26*
```

> decodeURI decodeURIComponent 恰恰相反

<a name="tn3aL"></a>

##### eval (TODO: eval会产生上下文，但 var 提升至 函数上下文 或 全局上下文)

```javascript
function func() {
  console.log(b, c); //报错
  eval("let a = 1; var b = 1; function c(){}");
  console.log(a, b, c); // 0 1 F
}
function foo() {
  console.log(b, c); // undefined F
  let a = 1;
  var b = 1;
  function c() {}
  console.log(a, b, c); // 0 1 F
}
func();
foo();
```

> 只在执行时产生效果

##

<a name="c0Zae"></a>

## 第六章，集合引用类型

<a name="K3Xmd"></a>

### Array

> 1.  \[].tostring()/toLocaleString() 会依次调用每项 tostring/toLocaleString 并用 , 拼接。如果有 null 或者 undefined ，看做 ''
> 2.  <br />

<a name="ITlh6"></a>

#### ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5f816ba04a84768992d1a168a1c85b6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=826&h=28&s=24781&e=png&b=e4e1e1)

<a name="v78DD"></a>

#### from 与 of

```javascript
const obj = {
  name: "xuzhou",
};
console.log(
  new Array(2, 4), // [2, 4]
  new Array(2), // [empty, empty]
  Array.of(2), // [2]
  Array.of(2, 4), // [2, 4]
  Array.from([1, 2]), // 浅拷贝
  Array.from(new Map().set(1, 2).set(3, 4)), // [[1, 2], [3, 4]]
  Array.from(new Set().add(1).add(2)), // [1, 2]
  Array.from({ 0: 0, 1: 100, length: 3 }), // [0, 100, undefined] 必须要指定 length 才行
  Array.from({
    // [1, 2, 3]
    *[Symbol.iterator]() {
      //
      yield 1; //
      yield 2; //
      yield 3; //
    }, //
  }), //
  Array.from(
    [1, 2, 3],
    function (v) {
      // [1, 4, 9]
      this[v] = v; //
      return v ** 2; //
    },
    obj
  ), // obj 即指定的 this
  obj // { '1': 1, '2': 2, '3': 3, name: 'xuzhou' }
);
```

<a name="sog4j"></a>

#### 数组空位（empty）

```javascript
// 方法都会跳过空的情况，并且 map 会保留空值返回
const arr = [1, , , , , 5];
console.log(
  arr.map((v) => {
    console.log(v);
    return v;
  }), // 1 5
  arr.forEach((v) => console.log(v)), // 1 5
  arr.some((v) => console.log(v)), // 1 5
  arr.every((v) => {
    console.log(v);
    return true;
  }) // 1 5
); // [ 1, <4 empty items>, 5 ] undefined false true

for (const item of arr) {
  console.log(item); // 1 undefined undefined undefined 5
}
for (const key in arr) {
  console.log(key, "=>", arr[key]); // 0=>1 5=>5
}
console.log([...arr]); // [1, undefined, undefined, undefined, 5]
```

<a name="TrEuY"></a>

#### fill 与 copyWithin

```javascript
// 对于 start end 大小相反，超出，负数都直接啥也不干
arr.fill(fillContent, (start = 0), (end = length)); // [)
arr.copyWithin(startFill, (start = 0), (end = length)); // [)
```

<a name="iPlSD"></a>

#### sort 与 reverse

> reverse 不会排序，仅反转
> sort 不传回调默认调用每项 toString 进行比较

```javascript
const arr = [1, 32, 5, 2];
arr.sort(); // [1, 2, 32, 5]
```

<a name="OdHrZ"></a>

#### slice 与 splice 与 concat（Symbol.isConcatSpreadable 控制被展品）

```javascript
/**
 * concat(...)
 * 不操作原数组
 * 默认展开一层
 * Symbol.isConcatSpreadable 控制是否展平
 * */
const arr = [1, 2];
const plus = [40, 50];
plus[Symbol.isConcatSpreadable] = false;
console.log(
  arr.concat(3, [4, [5]]), // [1, 2, 3, 4, [5]]
  arr.concat(3, plus) // [1, 2, 3, [40, 50]]
);

/**
 * slice(startIdx, endIdx)
 * 不操作原数组
 * 负数转化为 length + (负数)
 * 始终从左到右，与 string.slice 一样
 * */
const arr = [1, 2, 3, 4];
console.log(
  arr.slice(1, 2), // [2]
  arr.slice(1, 5), // [2, 3, 4]
  arr.slice(-1, 2) // []
);

/**
 * splice(startIdx, count, fillContent1, fillContent2...)
 * 操作原数组
 * */
const arr = [1, 2, 3, 4];
console.log(
  arr.splice(0, 2, "fill"), // [ 1, 2 ]
  arr // [ 'fill', 3, 4 ]
);
```

<a name="DC5so"></a>

#### 严格搜索与断言搜索

```javascript
// 严格搜索，内部执行 ===
arr.indexOf(search, (startIdx = 0)); // -1 || idx
arr.lastIndexOf(search, (startIdx = length)); // -1 || idx
arr.includes(search); // boolean

// 断言搜索，回调叫断言函数，回调第三个参数为回调中 this
arr.find((element, index, arr) => element === 1, this);
arr.findIndex((element, index, arr) => element === 1, this);
```

<a name="aIH79"></a>

#### every 与 some 与 filter 与 forEach 与 map

> func((element, index, arr) => {}, this)

<a name="dkf1Z"></a>

#### reduce 与 reduceRight

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(
  arr.reduce((pre, cur, index, arr) => pre + cur) // 15
  //初始：      1    2     1    arr
  //之后：   return  3     2    arr
);
```

> reduceRight 与之方向相反

<a name="tcdwJ"></a>

### ArrayBuffer 与 定型数组

```javascript
const buffer = new ArrayBuffer(8); // 创建一个 8 字节第缓冲区
// buffer: ArrayBuffer {
//   [Uint8Contents]: <00 00 00 00 00 00 00 00>, // 这里以十六进制显示，每两位代表8位二进制
//   byteLength: 8
// }
const view = new Int16Array(buffer); // 创建 buffer 的视图，Int16Array 标识以 16 位为一项
// view: [0, 0, 0, 0]
// 视图构造函数有 Ui/Int8/16/32Array, Float32Array...

const view2 = new Int16Array(8); // 等效于上两式
const view3 = new Int16Array(8, 1, 1); // 等效与上式
const view4 = new Int16Array([1, 2, 3]); // 创建 6 字节缓冲区，并创建视图

// 其实 Int16Array 与他的实例几乎可以和 Array 及其实例一样使用
// 除了 concat, splice, pop, push, shift, unshift
// 提供两种新方法 set, subarray

const v1 = new Int8Array(8); // [0, 0, 0, 0, 0, 0, 0, 0]
const v2 = new Int8Array([1, 2, 3, 4]); // [1, 2, 3, 4]
v1.set(v2, 0); // 第二个参数为起始下标
console.log(v1); // [1, 2, 3, 4, 0, 0, 0, 0]
// 超出报错
// subarray 与 slice 类似不过更加高效

const v = new Int8Array(6); // [0, 0, 0, 0] 每项范围 -128~127
```

<a name="OqWhd"></a>

### Map

<a name="kQQP3"></a>

#### 键为任何值

```javascript
const map = new Map();
// 键判断依据为全等，NaN 除外
// 例外
const nan = NaN;
map.set(nan, "ok");

console.log(
  NaN == NaN, // false
  map.get(NaN), // ok
  map.entries === map[Symbol.iterator] // true
);
```

<a name="CPmHa"></a>

#### 方法

```javascript
// 顾名思义
get(key): value | undefined
set(key, value): map本身
has(key): boolean
delete(key): boolean
clear(): undefined
```

<a name="uKT9x"></a>

#### map or object ？

1.  内存占用：同样内存 map 比 object 多存储 50%；winner ：map
2.  插入性能：差别不大，大量数据 map 快点点
3.  查找速度：winner：object
    1.  因为对象是无序的，浏览器会自动优化他们在内存布局，取决于数据，而 map 是有序的，浏览器便不可能对其优化内存布局
4.  删除：winner：map <a name="BvLTD"></a>

### WeakMap

> 键只能是引用类型，外部没有了该引用类型的引用，随后会被回收
> 不可迭代，无 size，clear

```javascript
const wm = new WeakMap();
const key = {};
wm.set(key, "value"); // 映射生效
key = null; // 原来的 weakmap键 失去外部引用，weakmap中映射随时被回收

const wm = new Map();
const key = {};
wm.set(key, "value"); // 映射生效
key = null; // map中映射不会回收
```

<a name="psh0a"></a>

#### 实现私有变量

```javascript
// WeakMap 实现私有变量 , 这样其实就是 es6 之前闭包的私有变量做法，不用 weakmap 也行
const User = (() => {
  const wm = new WeakMap();
  class User {
    constructor(name, id, age) {
      wm.set(this, {
        name,
        id,
        age,
      });
    }
    get(key) {
      return wm.get(this)[key];
    }
    set(key, value) {
      wm.set(this)[key] = value;
    }
  }
  return User;
})();
const user = new User("xz", "001", "19");
console.log(user.get("name"), user.get("id"), user.get("age")); // xz 001 19
```

<a name="C9z6V"></a>

### Set

<a name="vVqzM"></a>

#### 特例与方法

```javascript
const set = new Set([NaN, NaN]);
// 特例，内部判定 NaN 相等
console.log(set); // { NaN }

// 顾名思义
// size
// add(value): set
// has(value): boolean
// delete(value): boolean
// clear()
```

<a name="WZOqN"></a>

#### 迭代

```javascript
// 行为基本与 map 一致；其实可以理解为键值相等的 map
const set = new Set([1, 2, 3, 4]); // { 1, 2, 3, 4 }
set.values === set[Symbol.iterator]; // true
set.entries(); // {[1, 1], [2, 2], [3, 3], [4, 4]}
```

<a name="qdq9o"></a>

### WeakSet

1.  值只能为对象，且外部没有此对象的引用，随后会被回收，不可迭代，无 clear
2.  比如添加一系列 DOM 节点在 weakSet 里，通过是否在这个集合里来判断某些操作是否执行，如果 DOM 节点被删除了，便不需要去手动清除集合内的值了，对比数组简直方便太多了 <a name="bAKSx"></a>

## 第七章，迭代器和生成器

<a name="GXd5u"></a>

### 迭代器

规范：

- 必须暴露一个迭代器工厂函数 Symbol.iterator()
- 工厂函数必须返回迭代器
- 迭代器返回 iteratorResult 对象 （包含 done，value，done 为 true 为终止条件）

```javascript
const arr = [1, 2, 3, 4];
console.log(
  arr[Symbol.iterator] === arr.values, // true 称迭代器工厂函数
  arr[Symbol.iterator]() // 返回值称迭代器
);

// 满足迭代器工厂函数与迭代器工厂函数返回迭代器称：可迭代协议
// 自定义可迭代协议
class iterator {
  constructor(counter) {
    this.counter = counter;
  }
  [Symbol.iterator]() {
    let idx = 1,
      counter = this.counter;
    return {
      next() {
        if (idx <= counter) {
          return { done: false, value: idx++ }; // 称 iteratorResult 对象
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  }
}
const iter = new iterator(3);
for (const value of iter) {
  console.log(value); // 1 2 3
}

// 让对象变为可迭代对象，（但其实不这么干，都用 Object.keys 即可）
const obj = {
  name: "Tom",
  age: "19",
  weight: "140",
  [Symbol.iterator]() {
    const keys = Object.keys(this);
    const self = this;
    let idx = 0;
    return {
      next() {
        if (idx < keys.length) {
          return { done: false, value: self[keys[idx++]] }; // 称 iteratorResult 对象
        } else {
          return { done: true, value: undefined };
        }
      },
    };
  },
};
for (const item of obj) {
  console.log(item); // Tom 19 140
}
```

> 可迭代对象可用以下特性，原生语言会自动调用其工厂函数生成迭代器，并通过迭代器来迭代
> ![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c329a9488051450a8b0ac47979b06ea7~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=588&h=350&s=73935&e=png&b=fffefe)
> 迭代器不与可迭代对象某个快照绑定，意味着迭代时改变对象，迭代结果会收影响，而迭代器内部维护着对可迭代对象的引用，也就会阻止垃圾回收

<a name="qJpOP"></a>

#### 提前关闭迭代

原生的可迭代对象都不能提前关闭，下一次迭代任然继续上一次，即使 return 方法执行并返回 { done: true }

```javascript
const arr = [1, 2, 3, 4, 5];
const iter = arr[Symbol.iterator]();
iter.return = function () {
  console.log("arr iter return");
  return { done: true };
};
for (const item of iter) {
  if (item > 3) {
    break; // return执行了，但是并没有终止
  }
  console.log(item); // 1 2 3 arr iter return
}
for (const i of iter) {
  // 这次会继续上次的迭代
  console.log(i); // 5
}

/**
 * ----
 */
class iterator {
  constructor(counter) {
    this.counter = counter;
  }
  [Symbol.iterator]() {
    let idx = 1,
      counter = this.counter;
    return {
      next() {
        if (idx <= counter) {
          return { done: false, value: idx++ };
        } else {
          return { done: true, value: undefined };
        }
      },
      return() {
        console.log("my iter return");
        return { done: true };
      },
    };
  }
}
const iter2 = new iterator(5);
for (const value of iter2) {
  if (value > 3) {
    break; // 迭代器提前终止
  }
  console.log(value); // 1 2 3 my iter return
}
for (const value of iter2) {
  // 这次会调用工厂函数产生不同的迭代器实例，重新开始迭代
  console.log(value); // 1 2 3 4 5
}
```

<a name="ZlNZX"></a>

### 生成器

<a name="qtCKL"></a>

#### 作为可迭代对象

```javascript
// 生成器对象当做可迭代对象
function* func() {
  yield 1;
  yield 2;
  yield 3;
}
const g = func();

for (const i of g) {
  console.log(i); // 1 2 3
}
```

<a name="YttnN"></a>

#### yield 的输入输出

```javascript
// yield 输入输出 (这里好扯md) ① 暂时：第一次 next 并不会执行第一个 yield 所在语句，但是会返回 yield 表达式的值
function* func(n) {
  console.log(n);
  console.log("@", yield 1);
  console.log("@@", yield 2);
  console.log("@@@", yield 3);
}
const g = func("X");
// next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
console.log(
  g.next("A"), // {value: 1, done: false}         // 上面 log 输出 X
  g.next("B"), // {value: 2, done: false}         // 上面 log 输出 @ B
  g.next("C"), // {value: 3, done: false}         // 上面 log 输出 @@ C
  g.next("D") // {value: undefined, done: true}  // 上面 log 输出 @@@ D
);

// yield 输入输出 ②
function* func(n) {
  yield yield 100;
}
const g = func(1);
// next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
console.log(
  g.next(2), // 同一行最右边那个 yield 100 执行，返回 {value: 100, done: false}
  g.next(3) // 上一次表达式的值已经被丢弃，返回的是 yield 关键字的值，而这次传递参数为 3，所以返回 {value: 3, done: false}
);

// yield 输入输出 ③
function* func(n) {
  return yield 1;
}
const g = func("X");
// next 传值会成为 yield 关键字的返回值，而不是 yield option 表达式的值
console.log(
  g.next("A"), // {value: 1, done: false}
  g.next("B") // {value: B, done: true}
);
```

<a name="CWeHL"></a>

#### yield\* 委托（❓）

```javascript
// yield* 委托
function* func(n) {
  yield 1;
  yield* [2, 3];
  yield 4;
}
const g = func();
// yield* 将等价与 yield 2; yield 3;
// 这叫委托：yield* 委托给另一个可迭代对象或者生成器对象
console.log(
  g.next(), // {value: 1, done: false}
  g.next(), // {value: 2, done: false}
  g.next(), // {value: 3, done: false}
  g.next(), // {value: 4, done: false}
  g.next() // {value: undefined, done: true}
);

// yield* 的值
// 关联的迭代器 done 为 true 的 value 值
// 关联的生成器函数：函数返回值

// 实现递归
function* nTimes(n) {
  console.log("@@@");
  if (n > 0) {
    yield* nTimes(n - 1);
    yield n - 1; // 返回的值来自这里，也就是说 yield* 不会暂停
  }
}
for (const x of nTimes(3)) {
  console.log(x);
}
// @@@ * 4
// 0 1 2
```

> yield\* 并不会暂停，只能委托给可迭代对象或生成器函数

<a name="p3eaT"></a>

#### 提前关闭和终止生成器

> 每个生成器对象都有 return 方法 和 throw 方法
> 不同的是，return 肯定终止切关闭生成器，throw 如果在内部处理错误那么只能终止不能关闭
> 不能关闭指的是下一次 .next()，会继续上次的位置开始
> 详情看书吧，我这里云里雾里的

<a name="dodK9"></a>

## 第八章，对象，类，面向对象编程

<a name="Uyu8i"></a>

### <br />
