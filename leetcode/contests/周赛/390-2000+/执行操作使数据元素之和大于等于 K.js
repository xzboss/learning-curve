/**
 * @param {number} k
 * @return {number}
 */
var minOperations = function (k) {
	let x = 1
	let y = 1
	while (x * y < k) {
		if ((x + y) % 2 === 0) {
			y++
		} else {
			x++
		}
	}
	return x + y - 2
};
console.log(minOperations(-1))
console.log(minOperations(0))
console.log(minOperations(1))
console.log(minOperations(2))
console.log(minOperations(3))
console.log(minOperations(7))
