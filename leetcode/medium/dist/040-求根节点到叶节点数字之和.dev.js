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
// DFS 
var sumNumbers = function sumNumbers(root) {
  var result = 0;

  function dfs(root) {
    var sum = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!root) return;
    sum = sum * 10 + root.val;

    if (!root.left && !root.right) {
      result += sum;
    }

    dfs(root.left, sum);
    dfs(root.right, sum);
  }

  dfs(root);
  return result;
}; // BFS 


var sumNumbers = function sumNumbers(root) {
  if (!root) return 0;
  var queue = [root];
  var sumStack = [root.val];
  var result = 0;

  while (queue.length) {
    var node = queue.shift();
    var sum = sumStack.shift();

    if (!node.left && !node.right) {
      result += sum;
    }

    if (node.left) {
      queue.push(node.left);
      sumStack.push(sum * 10 + node.left.val);
    }

    if (node.right) {
      queue.push(node.right);
      sumStack.push(sum * 10 + node.right.val);
    }
  }

  return result;
}; //module.exports =