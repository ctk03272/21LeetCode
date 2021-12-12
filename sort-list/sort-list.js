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
var sortList = function (head) {

    /**
     * @param {ListNode} a
     * @param {ListNode} b
     * @return {ListNode}
     */
    var merge = function (a, b) {
        var node=null;
        if (a == null) {
            return b;
        }
        if (b == null) {
            return a;
        }

        if(a.val<b.val){
            node=a;
            node.next=merge(a.next,b);
        }else {
            node=b;
            node.next=merge(a,b.next);
        }
        return node;
    }

    /**
     * @param {ListNode} node
     * @return {ListNode}
     */
    var getMid=function (node) {
        if(node==null){
            return null;
        }
        var first=node;
        var second=node;

        while(first.next!=null && first.next.next!=null){
            first=first.next.next;
            second=second.next;
        }
        return second;
    }
    if(head==null || head.next==null){
        return head; 
    }
    var mid=getMid(head);
    var midNext=mid.next;
    mid.next=null;
    return merge(sortList(head),sortList(midNext))
};