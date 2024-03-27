"use strict";

// BFS
var averageOfLevels = function averageOfLevels(root) {
  if (!root) return [];
  var result = [];
  var queue = [root];

  while (queue.length) {
    var len = queue.length;
    var sum = 0;

    for (var i = 0; i < len; i++) {
      var node = queue.shift();
      sum += node.val;
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    result.push(sum / len);
  }

  return result;
}; // DFS 维护一个 总值数组 和 深度个数数组 ，再去遍历这两个数组求结果数组


var averageOfLevels = function averageOfLevels(root) {
  var sums = [];
  var counts = [];

  function dfs(root) {
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    if (!root) return;
    sums[depth] = sums[depth] === undefined ? root.val : sums[depth] + root.val;
    counts[depth] = counts[depth] === undefined ? 1 : counts[depth] + 1;
    dfs(root.left, depth + 1);
    dfs(root.right, depth + 1);
  }

  dfs(root);

  for (var i = 0; i < counts.length; i++) {
    sums[i] = sums[i] / counts[i];
  }

  return sums;
}; //module.exports =