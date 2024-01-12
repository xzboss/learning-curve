
/**
给你一个 无重叠的 ，按照区间起始端点排序的区间列表。

在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。

示例 1：

输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
输出：[[1,5],[6,9]]
示例 2：

输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
输出：[[1,2],[3,10],[12,16]]
解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
示例 3：

输入：intervals = [], newInterval = [5,7]
输出：[[5,7]]
示例 4：

输入：intervals = [[1,5]], newInterval = [2,3]
输出：[[1,5]]
示例 5：

输入：intervals = [[1,5]], newInterval = [2,7]
输出：[[1,7]]

 */


/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	if(intervals.length === 0) return [newInterval]
	let merge = []
	for (let i = 0; i < intervals.length; i++) {
		let start = intervals[i]
		if(start[1] >= newInterval[0]){
			let j = i
			while(true){
				if(j === intervals.length){
					return[[start[0],Math.max(newInterval[1],intervals[j][1])]]
				}else if(intervals[j][0]<=newInterval[1] && intervals[j][1] >=newInterval[1]){
					const temp = [start[0],Math.max(newInterval[1],intervals[j][1])]
					intervals.splice(i, j - i + 1, temp)
					return intervals
				}else if(intervals[j][0]>newInterval[1]){
					const temp = [start[0],Math.max(newInterval[1],intervals[j - 1][1])]
					intervals.splice(i, j - i, temp)
					return intervals
				}
			}
		}
	}
	intervals.push(newInterval)
	return intervals
};
console.log(insert([[1,3],[6,9]],[2,5]))
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8]))//[[1,2],[3,10],[12,16]]
console.log(insert([],[5,7]))//











//module.exports = 