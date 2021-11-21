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
var rob = function(root) {
    var answer=0;
    var map=new Map();
    var visitChild=function(root){
        var temp=0;
        if(root==null){
            return 0;
        }
        if(map.get(root)){
            return map.get(root)
        }
        if(root.left!=null){
            temp+=visitChild(root.left.left)+visitChild(root.left.right)
        }
        if(root.right!=null){
            temp+=visitChild(root.right.left)+visitChild(root.right.right)
        }
        temp=Math.max(temp+root.val,visitChild(root.left)+visitChild(root.right))
        map.set(root,temp);
        return temp
    }
    answer=visitChild(root);
    return answer;
};