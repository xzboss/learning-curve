const obj1 = {}
const obj2 = []
const obj3 = {
  a: 1
}
const obj4 = [undefined]
const obj5 = [null]
const obj6 = [1]
const obj7 = [0]
const obj8 = ['1']
const obj9 = ['0']
const obj10 = [[]]
for (let i = 1; i < 11; i++) {
  console.log(i + '-----' + !!eval('obj' + i))
}
