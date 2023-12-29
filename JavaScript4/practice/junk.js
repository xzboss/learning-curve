class Person{
    constructor(name){
        this.name = name
    }
    sayName=()=>{
        console.log(this.name)
    }
}
const person = new Person('111')
const person2 = new Person('222')
person.sayName()
person2.sayName()
console.log(person.sayName === person2.sayName,Person.sayName)
