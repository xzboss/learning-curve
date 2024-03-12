
/**
给你一个链表的头节点 head 和一个特定值 x ，
请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。

你应当 保留 两个分区中每个节点的初始相对位置。
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
	const dummy = {next:head}
	let cur = head
	let pre = dummy
	let areaHead = null
	while(cur && cur.next){
		if(cur.val >= x) {
			areaHead = cur
			while(cur.next && cur.next.val >= x){
				cur = cur.next
			}
			if(cur.next){
				pre.next = cur.next
				const temp = cur.next.next
				cur.next.next = areaHead
				cur.next = temp
				cur = cur.next
				pre = pre.next
			}
		}else{
			pre = pre.next
			cur = cur.next
		}
	}
	return dummy.next
};








//module.exports = 