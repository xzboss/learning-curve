const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void (async function () {
    // Write your code here
    let step = 1;
    let arr = [];
    let q;
    let n;
    let sum = 0;
    let count = 0;
    while ((line = await readline())) {
        let tokens = line.split(" ");
        if (step === 1) {
            [n, q] = [tokens[0], tokens[1]];
        } else if (step === 2) {
            arr = tokens;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > 0) {
                    sum += arr[i] * 1;
                } else {
                    count++;
                }
            }
        } else if (step - 2 <= q) {
           console.log(sum + count * Math.min(tokens[0], tokens[1]), sum + count * Math.max(tokens[0], tokens[1]));
        }
        step++;
    }
})();
