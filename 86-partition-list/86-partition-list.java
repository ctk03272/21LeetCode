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
	public ListNode partition(ListNode head, int x) {
        if(head==null){
            return null;
        }
		ListNode now = head;
		ListNode lessStart = null;
		ListNode greaterStart = null;
		ListNode less = null;
		ListNode greater = null;
		while (now != null) {
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
	}
}