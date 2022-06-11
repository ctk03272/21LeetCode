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
	public ListNode rotateRight(ListNode head, int k) {
        if(head==null){
			return null;
		}
		ListNode rememberHead = head;
		ListNode prev = null;
		ListNode ans = null;
		int count = 0;
		while (head != null) {
			prev = head;
			head = head.next;
			count++;
		}
		prev.next = rememberHead;
		head = rememberHead;
		k = k % (count);
		k = count - k;
		while (k > 0) {
			prev = head;
			head = head.next;
			k--;
		}
		prev.next=null;
		ans = head;
		return ans;
	}
}