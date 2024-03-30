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
 * @return {number[][]}
 */
// BFS
var zigzagLevelOrder = function zigzagLevelOrder(root) {
  if (!root) return [];
  var result = [];
  var queue = [root];
  var flag = true;

  while (queue.length) {
    var len = queue.length;
    var tempArr = [];

    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);

      if (flag) {
        tempArr.push(node.val);
      } else {
        tempArr.unshift(node.val);
      }
    }

    flag = !flag;
    result.push(tempArr);
  }

  return result;
}; //module.exports =