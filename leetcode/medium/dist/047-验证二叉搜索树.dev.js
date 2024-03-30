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
 * @return {boolean}
 */
var _require = require("webpack"),
    node = _require.node; // DFS 递归函数功能：中序遍历找


var isValidBST = function isValidBST(root) {
  var pre = Number.MIN_SAFE_INTEGER;

  function dfs(root) {
    if (!root) return;
    var l = dfs(root.left);
    if (l) return true;

    if (pre < root.val) {
      pre = root.val;
    } else {
      return true;
    }

    var r = dfs(root.right);
    return l && r;
  }

  return !dfs(root);
}; // DFS ：給每个节点一个范围，如果不在这个范围就证明不是BST


var isValidBST = function isValidBST(root) {
  function dfs(root, min, max) {
    if (!root) return true;
    if (min >= root.val || root.val >= max) return false;
    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max);
  }

  return dfs(root, -Infinity, Infinity);
}; //module.exports =