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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let answer=[];
    let getinorderTraversal=function(root){
        if(!root){
            return;
        }
        getinorderTraversal(root.left);
        answer.push(root.val);
        getinorderTraversal(root.right);  
    }
    getinorderTraversal(root);
    return answer;

};
