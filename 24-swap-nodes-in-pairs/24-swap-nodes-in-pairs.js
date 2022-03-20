/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    return swapPairsFunction(head);
};

let swapPairsFunction=function(head){
    if(head==null){
        return null;
    }else if(head.next==null){
        return head;
    }
    let next=head.next;
    let temp=swapPairsFunction(head.next.next);
    head.next=temp;
    next.next=head;
    return next;
}