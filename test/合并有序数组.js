const arr = [1,2,3,4,6,6,8,9,12,13,15,16,17,23,26]
let start = arr[0]
const result = []

for (let i = 0; i < arr.length; i++) {
  if(arr[i] + 1 !== arr[i + 1]){
    result.push(start !== arr[i] ? start + '->' + arr[i] : start)
    start = arr[i + 1]
  }
}
console.log(result)
