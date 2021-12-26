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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function (root, targetSum) {
    let answer = 0;
    let dfs = function (root, sumMap) {
        if (root == null) {
            return;
        }
        let nowVal = root.val;
        sumMap.push(0)
        let newAr = sumMap.map(a => a + nowVal);
        newAr.forEach(a =>{if(a == targetSum) answer++} );
        dfs(root.left, [...newAr]);
        dfs(root.right, [...newAr]);
    }
    dfs(root, []);
    return answer;
};