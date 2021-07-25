/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let dfs=function(p,q){
        if(p==null || q==null || p.val!=q.val) {

            return false;
        }else{
            return (p.left==null && q.left==null?true:dfs(p.left,q.left) )&& (p.right==null && q.right==null?true:dfs(p.right,q.right));
        } 
    }
    return p==null && q==null?true:dfs(p,q);
};