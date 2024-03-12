const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
	// Write your code here
	const group = []
	let id
	let step = 1
	let max = 0
	while ((line = await readline())) {
		const tokens = line.split(' ')
		if (step === 1) {
			id = tokens[1]
		}
		if (step === 2) {
			tokens.forEach(item => {
				group[item] = group[item] ? group[item] + 1 : 1
				if (item !== id) {
					max = Math.max(group[item], max)
				}
			});
			return group[id] + max
		}
		step++
	}
})();



const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;
// 未作出
void (async function () {
	let group
	let len
	let step = 1
	let strs
	while ((line = await readline())) {
		const tokens = line.split(' ')
		if (step === 1) {
			len = tokens[0]
		}
		if (step === 2) {
			group = tokens
		}
		if (step === 3) {
			let cur = 0
			// 找到最前面的
			for (let i = 0; i < len; i++) {
				if (group.includes(tokens[0][i])) {
					cur = i
					break
				}
			}
			//
			let dis = 1
			strs = tokens[0].split('').map((char, i) => {
				if (i <= cur) {
					dis = 1
					return tokens[0][cur]
				}
				if (!group.includes(char)) {
					for (let j = 1; j < dis; j++) {
						if (group.includes(tokens[0][cur + j])) {
							cur = cur + dis + j
						}
						return tokens[0][cur]
					}
				}
				dis++
				return tokens[0][cur]
			})
			console.log(strs.join())
		}
		step++
	}
})();
