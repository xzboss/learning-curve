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
var levelOrder = function levelOrder(root) {
  if (!root) return [];
  var res = [];
  var queue = [root];

  while (queue.length) {
    var len = queue.length;
    var temp = [];

    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      temp.push(node.val);
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    res.push(temp);
  }

  return res;
}; //DFS


var levelOrder = function levelOrder(root) {
  var res = [];

  function dfs(root) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!root) return;

    if (res[depth]) {
      res[depth].push(root.val);
    } else {
      res[depth] = [root.val];
    }

    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }

  dfs(root);
  return res;
}; //module.exports =