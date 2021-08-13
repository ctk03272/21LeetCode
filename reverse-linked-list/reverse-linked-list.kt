/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun reverseList(head: ListNode?): ListNode? {
        if(head?.next==null){
            return head;
        }else{
            var answer=reverseList(head.next);
            head.next?.next=head;
            head.next=null;
            return answer;
        }
    }
}