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
var isSymmetric = function(root) {
    var compare =function (left,right){
        var compareFirst,compareSecond=true;
        if(left==null && right ==null){
            return true;
        }else if(left == null && right !=null){
            return false;
        }else if(left !=null && right ==null){
            return false;
        }
        
 
        if(left.val!=right.val){
            console.log("")
            return false;
        }
        compareFirst= compare(left.left,right.right)
        compareSecond= compare(left.right,right.left)
        if(compareFirst==false || compareSecond==false){
            return false;
        }
        
        return  true;
    }
    return compare(root.left,root.right)
};