/**
 * @param {number[]} nums
 * @param {number[]} freq
 * @return {number[]}
 */
var mostFrequentIDs = function (nums, freq) {
	let result = []
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		let f = map.get(nums[i])
		if (f === undefined) f = 0
		const n = f + freq[i]
		map.set(nums[i], n < 0 ? 0 : n)
		result.push(fun(map))
	}
	function fun (map) {
		let max = 0
		for (const [key, v] of map) {
			max = Math.max(v, max)
		}
		return max
	}
	return result
};
console.log(mostFrequentIDs([2, 3, 2, 1], [3, 2, -3, 1]))