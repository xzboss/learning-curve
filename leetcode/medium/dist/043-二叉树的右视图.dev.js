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
 * @return {number[]}
 */
// BFS，出栈的最后一个就是右边试图：最好理解
var rightSideView = function rightSideView(root) {
  if (!root) return [];
  var queue = [root];
  var rightView = [];

  while (queue.length) {
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      var node = queue.shift();

      if (i === len - 1) {
        rightView.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return rightView;
}; // DFS :也很好理解，正常遍历，维护一个当前深度，直接以深度为下标进行赋值


var rightSideView = function rightSideView(root) {
  var rightView = [];

  function dfs(root) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!root) return;
    rightView[depth] = root.val;
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }

  dfs(root);
  return rightView;
}; //module.exports =