/**
设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

实现 MinStack 类:

MinStack() 初始化堆栈对象。
void push(int val) 将元素val推入堆栈。
void pop() 删除堆栈顶部的元素。
int top() 获取堆栈顶部的元素。
int getMin() 获取堆栈中的最小元素。

示例 1:

输入：
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

输出：
[null,null,null,null,-3,null,0,-2]

解释：
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> 返回 -3.
minStack.pop();
minStack.top();      --> 返回 0.
minStack.getMin();   --> 返回 -2.
 */

var MinStack = function () {
  this.stack = []
  this.min = []
}

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val)
  if (this.min.length > 0) {
    val <= this.min[this.min.length - 1] && this.min.push(val)
  } else {
    this.min.push(val)
  }
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  let temp
  if (this.stack.length > 0) {
    temp = this.stack.pop()
  }
  if (this.min.length > 0 && temp <= this.min[this.min.length - 1]) {
    this.min.pop()
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1]
  }
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.min.length - 1]
}

var obj = new MinStack()
obj.push(10)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
console.log(param_3, param_4)

//module.exports =
