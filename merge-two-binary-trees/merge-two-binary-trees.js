/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
let mergeTrees = function (t1, t2) {
    if(t1==null && t2==null){
        return null;
    }else if(t1==null){
        return t2;
    }else if(t2==null){
        return t1;
    }else{
    return new TreeNode(t1.val+t2.val,mergeTrees(t1.left,t2.left),mergeTrees(t1.right,t2.right));     
    }
};