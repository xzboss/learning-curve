const person = {
    name: 'xz',
    age: 19
}
const car = {
    brand: 'Benz',
    get width(){
        return 'width'
    },
    get height(){
        throw 'some err'
    }
}
try {
    Object.assign(person, car)
} catch (error) {}

console.log(person)
// {name: 'xz', age: 19, brand: 'Benz', width: 'width'}