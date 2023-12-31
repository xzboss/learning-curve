/**
给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。

字母异位词 是由重新排列源单词的所有字母得到的一个新单词。

示例 1:

输入: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
输出: [["bat"],["nat","tan"],["ate","eat","tea"]]
示例 2:

输入: strs = [""]
输出: [[""]]
示例 3:

输入: strs = ["a"]
输出: [["a"]]
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = []
  const map = {}
  for (let i = 0; i < strs.length; i++) {
    const str = strs[i].split('').sort().join()
    if (!map[str]) {
      map[str] = []
    }
    map[str].push(strs[i])
  }
  return Object.values(map)
}
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

// 还有一个方法就是给每个字母一个质数映射，这样就不用排序了，异位词加出来的必定唯一
