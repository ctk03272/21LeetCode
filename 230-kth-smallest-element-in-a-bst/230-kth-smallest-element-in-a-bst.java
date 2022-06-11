/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
	int answer = -1;
	int count;

	public int kthSmallest(TreeNode root, int k) {
		count = k;
		findKthSmallest(root);
		return answer;
	}

	public void findKthSmallest(TreeNode node) {
		if (node == null) {
			return;
		}
		findKthSmallest(node.left);
		if (--count == 0) {
			answer = node.val;
		}
		findKthSmallest(node.right);
	}
}
