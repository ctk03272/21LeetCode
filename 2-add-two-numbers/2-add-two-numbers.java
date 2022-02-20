/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        int carry = 0;
        ListNode prevNode = null;
        ListNode nowNode = null;
        ListNode firstNode = null;
        while (l1 != null || l2 != null || carry!=0) {
            int val = 0;
            
            if (getVal(l1) + getVal(l2) + carry >= 10) {
                val = +getVal(l1) + getVal(l2) + carry - 10;
                carry = 1;
            } else {
                val = getVal(l1) + getVal(l2) + carry;
                carry=0;
            }
            
            nowNode = new ListNode(val);
            if (prevNode != null) {
                prevNode.next = nowNode;
            } else {
                firstNode = nowNode;
            }
            
            prevNode = nowNode;
            if (l1 != null) {
                l1 = l1.next;
            }
            if (l2 != null) {
                l2 = l2.next;
            }
            if(l2==null && carry==0){
                prevNode.next=l1;
                break;
            }
            if(l1==null && carry==0){
                prevNode.next=l2;
                break;
            }
        }

        return firstNode;
    }
    
    public int getVal(ListNode listNode) {
        if (listNode == null) {
            return 0;
        } else {
            return listNode.val;
        }
    }
}