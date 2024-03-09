const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
	// Write your code here]
	let arr
	let i
	let step = 1
	const temp = []
	function test () {
		let m = i, n = i, k = 2
		for (let m = 0; m < i; m++) {
			
			for (let n = 0; n < i; n++) {
			
			}
		}

	}
	while ((line = await readline())) {
		let tokens = line.split(" ");
		if (step === 1) {
			i = 4
		}
		for (let j = 0; j < i; j++) {
			arr.push(tokens)
		}
		if (step - i - 1 === 1) {
			test()
		}
		step++;
	}
})();
