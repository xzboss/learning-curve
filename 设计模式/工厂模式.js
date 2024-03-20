const readline = require('readline')
// 这个额外的，可以不用加进工厂模式进行理解
class Operation {
	number1 = 0
	number2 = 0
	getResult = function () {
		return 0
	}
}
class Add extends Operation {
	constructor() {
		super()
	}
	getResult = function () {
		return this.number1 + this.number2
	}
}
class OperationFactory {
	createOperate = function (op) {
		switch (op) {
			case "+": return new Add() // 添加功能仅需添加 switch 和添加单独的操作类
		}
	}
}

const main = async function () {
	const rl = new readline.createInterface({
		input: process.stdin,
		output: process.stdout
	})
	rl.on('line', (input) => {
		const [A, B] = input.split(' ')
		const opAdd = new OperationFactory().createOperate('+')
		opAdd.number1 = A / 1
		opAdd.number2 = B / 1
		console.log(opAdd.getResult())
	})
}
main()