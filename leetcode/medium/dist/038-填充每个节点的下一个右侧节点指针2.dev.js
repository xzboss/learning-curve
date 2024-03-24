"use strict";

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
// 层序遍历
var _connect = function connect(root) {
  if (!root) return null;
  var queue = [root];

  while (queue.length) {
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      queue[i].next = queue[i + 1] ? queue[i + 1] : null;
    }

    for (var _i = 0; _i < len; _i++) {
      var node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  ;
  return root;
}; // 层序


var _connect = function connect(root) {
  if (!root) return null;
  var queue = [root];

  while (queue.length) {
    var len = queue.length;

    for (var i = 0; i < len; i++) {
      queue[0].next = i === len - 1 ? null : queue[1];
      var node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  ;
  return root;
}; //层序遍历 不要队列


var _connect = function connect(root) {
  if (!root) return null;
  root.next = null;
  var cur = root;

  while (cur) {
    var head = {
      next: null
    };
    var pre = head;

    while (cur) {
      if (cur.left) {
        pre.next = cur.left;
        pre = pre.next;
      }

      if (cur.right) {
        pre.next = cur.right;
        pre = pre.next;
      }

      cur = cur.next;
    }

    ;
    cur = head.next;
  }

  return root;
}; // 递归 真心不会！！！


var _connect = function connect(root) {
  root.next = _connect(root);
};

_connect({
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    },
    right: {
      val: 5
    }
  },
  right: {
    val: 3,
    right: {
      val: 7
    }
  }
}); //module.exports =