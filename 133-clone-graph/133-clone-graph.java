/*
// Definition for a Node.
class Node {
    public int val;
    public List<Node> neighbors;
    public Node() {
        val = 0;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val) {
        val = _val;
        neighbors = new ArrayList<Node>();
    }
    public Node(int _val, ArrayList<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/
class Solution {
	HashMap<Node, Boolean> isVisitedNode = new HashMap<>();
	HashMap<Node, Node> nodeNodeHashMap = new HashMap<>();

	public Node cloneGraph(Node node) {
        if(node==null){
			return null;
		} 
		Node ans = null;
		Queue<Node> queue = new LinkedList();
		queue.add(node);
		isVisitedNode.put(node, Boolean.TRUE);
		while (!queue.isEmpty()) {
			Node now = queue.poll();
			if (ans == null) {
				ans = cloneNode(now);
			} else {
				cloneNode(now);
			}
			List<Node> nodes = now.neighbors;
			for (int i = 0; i < nodes.size(); i++) {
				Node temp = nodes.get(i);
				if (!isVisitedNode.containsKey(temp)) {
					queue.add(temp);
					isVisitedNode.put(temp, Boolean.TRUE);
				}
			}
		}
		return ans;
	}

	public Node cloneNode(Node node) {
		Node targetNode = null;
		if (nodeNodeHashMap.containsKey(node)) {
			targetNode = nodeNodeHashMap.get(node);
		} else {
			targetNode = new Node(node.val);
			nodeNodeHashMap.put(node, targetNode);
		}
		List<Node> nodes = node.neighbors;
		for (int i = 0; i < nodes.size(); i++) {
			Node now = nodes.get(i);
			if (!nodeNodeHashMap.containsKey(now)) {
				Node add = new Node(now.val);
				nodeNodeHashMap.put(now, add);
				targetNode.neighbors.add(add);
			} else {
				Node nowTarget = nodeNodeHashMap.get(now);
				targetNode.neighbors.add(nowTarget);
			}
		}
		return targetNode;
	}
}