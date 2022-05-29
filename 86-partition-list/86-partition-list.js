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
var partition = function (head, x) {
    if (head === null) {
        return null;
    }
    let now = head;
    let lessStart = null, greaterStart = null, less = null, greater = null;
    while (now !== null) {
        if (now.val < x) {
            if (less == null) {
                lessStart = now;
                less = now;
            } else {
                less.next = now;
                less = less.next;
            }
            now = now.next;
        } else {
            if (greater == null) {
                greaterStart = now;
                greater = now;
            } else {
                greater.next = now;
                greater = greater.next;
            }
            now = now.next;
        }
    }
    if(greater==null || less==null){
        return head;
    }
    greater.next=null;
    less.next = greaterStart;
    return lessStart;
};