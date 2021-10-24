/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    let makeTree = function (preorder, inorder) {
                if(preorder.length==0){
            return null;
        }
        if (preorder.length == 1) {
            return new TreeNode(preorder[0], null, null);
        }
        let root = new TreeNode(preorder[0], null, null);
        let index = inorder.indexOf(root.val);
        root.left = makeTree(preorder.slice(1, 1 + index),inorder.slice(0,index));
        root.right = makeTree(preorder.slice(1+index),inorder.slice(index+1));
        return root;
    }
    return makeTree(preorder, inorder);
};