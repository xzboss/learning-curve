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
 * @return {number}
 */
// BFS
var _countNodes = function countNodes(root) {
  if (!root) return 0;
  var queue = [root];
  var sum = 1;

  while (queue.length) {
    var node = queue.shift();

    if (node.right) {
      queue.push(node.left);
      queue.push(node.right);
      sum += 2;
    } else {
      return sum + (node.left ? 1 : 0);
    }
  }
}; //DFS


var _countNodes = function countNodes(root) {
  if (!root) return 0;
  return 1 + _countNodes(root.left) + _countNodes(root.right);
}; // DFS plus：不会
//module.exports =