// class Person {
//   constructor() {
//     return [];
//   }
// }

// const p = new Person();
// console.log(p);

// class Person {
//   static say() {
//     console.log("dd");
//   }
// }

// console.log(Person.say["HomePage"]);

//
// class Person {
//   constructor() {
//     console.log(this.name);

//     console.log(this.say);
//   }
//   say() {}
//   name = "xz";
// }
// const p = new Person();

class Person {
  ['w' + 'd'] = '';
  [Symbol()] = '///';
  [2 + 2] = '444';
  a() {}
}
class Boss extends Person {
  constructor() {
    super();
    console.log(this.name, this.fun, this.foo, '@@@');
  }
  name = 'xz';
  fun() {}
  foo = function () {};
}
const boss = new Boss();
console.log(boss);
