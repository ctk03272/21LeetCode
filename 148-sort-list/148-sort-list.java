import java.util.Arrays;
import java.util.List;

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
	public ListNode sortList(ListNode head) {
		if (head == null || head.next == null) {
			return head;
		}
		List<ListNode> listNodes = split(head);
		return mergeTwoNodeList(sortList(listNodes.get(0)), sortList(listNodes.get(1)));
	}

	public List<ListNode> split(ListNode head) {
		if (head == null || head.next == null) {
			return Arrays.asList(head, null);
		}
		ListNode forward = head.next;
		ListNode backward = head;

		while (forward != null) {
			forward = forward.next;
			if (forward != null) {
				forward = forward.next;
				backward = backward.next;
			}
		}
		List<ListNode> ans = Arrays.asList(head, backward.next);
		backward.next = null;
		return ans;
	}

	public ListNode mergeTwoNodeList(ListNode first, ListNode second) {
		if (first == null) {
			return second;
		}
		if (second == null) {
			return first;
		}
		ListNode ans;
		if (first.val < second.val) {
			ans = first;
			first.next = mergeTwoNodeList(first.next, second);
		} else {
			ans = second;
			second.next = mergeTwoNodeList(first, second.next);
		}
		return ans;
	}
}
