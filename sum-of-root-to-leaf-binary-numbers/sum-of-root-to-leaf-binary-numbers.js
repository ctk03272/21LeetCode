/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let sumRootToLeaf = function(root) {
    
    let answer=0;
    let dfs=function(root,ans){
        if(root==null){
            return 0;
        }else{
            ans=ans*2+root.val;
            return root.left==null && root.right==null?ans:dfs(root.left,ans)+dfs(root.right,ans);
        }
        
    }
    return dfs(root,0);
};