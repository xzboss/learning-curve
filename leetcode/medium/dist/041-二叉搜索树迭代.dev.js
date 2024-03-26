"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 */
var BSTIterator = function BSTIterator(root) {
  var _this = this;

  this.stack = [];
  this.p = 0;

  dfs = function (_dfs) {
    function dfs(_x) {
      return _dfs.apply(this, arguments);
    }

    dfs.toString = function () {
      return _dfs.toString();
    };

    return dfs;
  }(function (root) {
    if (!root) return;

    if (root.left) {
      dfs(root.left);
    }

    _this.stack.push(root);

    if (root.right) {
      dfs(root.right);
    }
  });

  dfs(root);
};
/**
 * @return {number}
 */


BSTIterator.prototype.next = function () {
  this.p %= this.stack.length;
  return this.stack[this.p++].val;
};
/**
 * @return {boolean}
 */


BSTIterator.prototype.hasNext = function () {
  return this.p !== this.stack.length;
};
/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// 层序遍历就略了，本质上就是简单题
//module.exports =