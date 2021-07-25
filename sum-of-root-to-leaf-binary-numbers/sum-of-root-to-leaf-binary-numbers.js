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
           return;
       }
        ans+=root.val;
        if(root.left==null && root.right==null){
            console.log(ans)
            answer+=ans;
        }
        if(root.left!=null){
            dfs(root.left,ans*2);
        }
        if(root.right!=null){
            dfs(root.right,ans*2);
        }
        
    }
    dfs(root,0);
    
    return answer;
};