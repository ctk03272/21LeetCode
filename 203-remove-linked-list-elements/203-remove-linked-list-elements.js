/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let start=new ListNode(0);
    start.next=head;
    head=start;
    while(start.next!=null){
        if(start.next.val==val){
            start.next=start.next.next;
        }else{
            start=start.next;
        }
    }
    return head.next;
    
};