/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    let makeTree = function (ar, start, end) {
        if (start > end) {
            return null;
        }
        let mid = parseInt((start + end) / 2);
        let node = new TreeNode(nums[mid], makeTree(ar.slice(start, mid-1), start, mid-1), makeTree(ar.slice(mid+1, end), mid+1, end));
        return node;
    }
    return makeTree(nums, 0, nums.length-1);
};