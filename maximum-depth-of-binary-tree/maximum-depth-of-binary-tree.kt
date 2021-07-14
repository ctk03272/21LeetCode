/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    var answer = Int.MIN_VALUE;
    fun getDepth(root: TreeNode?,depth:Int){
        if(root==null){
            answer= answer.coerceAtLeast(depth-1);
            return;
        }
        getDepth(root.left,depth+1);
        getDepth(root.right,depth+1);
    }
 
    fun maxDepth(root: TreeNode?): Int {
        getDepth(root,1);
        return answer;
    }
}