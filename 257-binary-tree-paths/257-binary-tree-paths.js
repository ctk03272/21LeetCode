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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    let answer = [];
    var getTreePath = function (root, ans) {
        if (root.left === null && root.right === null) {
            answer.push(ans + root.val);
        }
        if (root.left != null) {
            getTreePath(root.left, ans + root.val + "->");
        }
        if (root.right != null) {
            getTreePath(root.right, ans + root.val + "->");
        }
    };
    getTreePath(root, "")
    return answer;
};