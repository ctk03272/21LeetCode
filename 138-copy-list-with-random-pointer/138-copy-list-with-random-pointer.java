/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
	public Node copyRandomList(Node head) {
		Node ans = null;
		int index=0;
		Node now = head;
		Node newNow = null, newPrev = null;
		HashMap<Node, Node> map = new HashMap<>();
		while (now != null) {
			newPrev = newNow;
			newNow = new Node(now.val);
			if (index == 0) {
				ans = newNow;
			}
			if (newPrev != null) {
				newPrev.next = newNow;
			}
			if (!map.containsKey(now)) {
				map.put(now, newNow);
			}
			now = now.next;
			index++;
		}
		now = head;
		newNow = ans;
		while (newNow != null) {
			newNow.random = map.get(now.random);
			newNow = newNow.next;
			now = now.next;
		}
		return ans;
	}
}