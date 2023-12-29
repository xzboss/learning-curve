// class A {
//     func(a:number,b:string):number {
//         return 2
//     }
//     func(a:number,b:number):string {
//         return 's'
//     }
// }
function func(d:number):number
function func(d:string):string
function func(d:string | number):string|number


type func = (d: number) => number
type func = (d: string) => string
// function processInput(input: number): number;
// function processInput(input: string): string;
// function processInput(input: boolean): boolean;
// function processInput(input: number | string | boolean): number | string | boolean {
//   if (typeof input === "number") {
//     return input * 2;
//   } else if (typeof input === "string") {
//     return input.toUpperCase();
//   } else if (typeof input === "boolean") {
//     return !input;
//   }
//   return 1
// }

// // 调用重载的函数
// const resultNumber = processInput(5); // 返回类型为 number
// const resultString = processInput("hello"); // 返回类型为 string
// const resultBoolean = processInput(true); // 返回类型为 boolean