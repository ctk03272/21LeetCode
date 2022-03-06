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
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let answer=true;
    let isU=function(root,prev){
        console.log(root)
        console.log(prev)
        if(root==null) return;
        if(root.val!=prev){
            answer=false;
            return;
        }
        if(answer)isU(root.left,root.val);
        if(answer)isU(root.right,root.val);
    }
    isU(root,root.val)
    return answer;
};