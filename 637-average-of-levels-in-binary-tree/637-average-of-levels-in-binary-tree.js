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
var averageOfLevels = function(root) {
    let sum = {}
    let answer = [];
    let addToSum = function (root, level) {
        if (root == null) {
            return;
        }
        if (sum[level] == null) {
            sum[level] = [];
        }
        sum[level].push(root.val);
        addToSum(root.left, level + 1);
        addToSum(root.right, level + 1);
    }
    addToSum(root, 0);
    return Object.keys(sum).map(a => {
        let an = 0;
        for (let i = 0; i < sum[a].length; i++) {
            an += sum[a][i];
        }
        return an / sum[a].length;
    })
};