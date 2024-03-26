"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// DFS ：
// 先正常深度遍历，并且维护一个路径栈记录找到的那个的所有祖节点
// 然后对祖宗节点进行遍历递归查找
var _lowestCommonAncestor = function lowestCommonAncestor(root, p, q) {
  var path = [];

  function dfs(root) {
    if (!root) return;
    path.push(root);

    if (root === p || root === q) {
      var findNext = root === p ? q : p;

      for (var i = path.length - 1; i >= 0; i--) {
        if (find(path[i], path[i + 1], findNext)) return path[i];
      }
    }

    var node = dfs(root.left) || dfs(root.right);
    if (node) return node;
    path.pop();
  }

  function find(root, alreadyTraveNode, target) {
    if (!root || root === alreadyTraveNode) return false;
    if (root === target) return true;
    return find(root.left, alreadyTraveNode, target) || find(root.right, alreadyTraveNode, target);
  }

  return dfs(root);
};

console.log(_lowestCommonAncestor({
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 3
  }
}, 2, 3)); // 题解第一的递归，但是啊，他会遍历到所有节点，即使已经在最左边找到答案了，他还是会遍历到完

var _lowestCommonAncestor = function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;

  var L = _lowestCommonAncestor(root.left, p, q);

  var R = _lowestCommonAncestor(root.right, p, q);

  if (L === null) return R;
  if (R === null) return L;
  return root;
}; //module.exports =