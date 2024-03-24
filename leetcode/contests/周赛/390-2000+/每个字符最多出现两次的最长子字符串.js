/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function (s) {
	let max = 0
	let map = {}
	let len = s.length
	let cur = 0
	let pre = 0
	while (cur < len) {
		if (map[s[cur]]) {
			map[s[cur]]++
		} else {
			map[s[cur]] = 1
		}
		if (map[s[cur]] > 2) {
			max = Math.max(max, cur - pre)
			pre++
			cur = pre
			map = {}
		} else {
			cur++
		}
	}
	max = Math.max(max, cur - pre)
	return max
};
console.log(maximumLengthSubstring('bcbbbcba'))
console.log(maximumLengthSubstring('aaaaa'))
console.log(maximumLengthSubstring('aaaaac'))

console.log(maximumLengthSubstring('qwert'))
console.log(maximumLengthSubstring(''))

