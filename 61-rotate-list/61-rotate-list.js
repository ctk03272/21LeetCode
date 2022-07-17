/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head == null) {
        return null;
    }
    let remember = head;
    let prev, ans, count = 0;
    while (head != null) {
        prev = head;
        head = head.next;
        count++;
    }
    prev.next = remember;
    head = remember;
    k = k % (count);
    k = count - k;
    while (k > 0) {
        prev = head;
        head = head.next;
        k--;
    }
    prev.next=null;
    ans=head;
    return ans;

};
