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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let answer=-1;
    function findkthSmallest(root) {
        if (!root){
            return;
        }
        findkthSmallest(root.left);
        k--;
        if(k==0){
                answer=root.val;
        }
        findkthSmallest(root.right);
    }

    findkthSmallest(root)
    return answer;
};