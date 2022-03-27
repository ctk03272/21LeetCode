/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
    ArrayList<ListNode> ar = new ArrayList<>();
        while (head != null) {
            ar.add(head);
            head = head.next;
        }
        int len = ar.size();
        if(len==1){
            return null;
        }

        if (n == 1) {
            ar.get(len - (n + 1)).next = null;
        } else if (n == len) {
            return ar.get(1);
        } else {
            ar.get(len - (n + 1)).next = ar.get(len - (n - 1));
        }
        return ar.get(0);
    }
}