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
var deepestLeavesSum = function(root) {
    let start=[];
    start.push(root)
    let findDeep=function(given){
        let deep=[];
        for(let i=0;i<given.length;i++){
            if(given[i].left!=null){
                deep.push(given[i].left);
            }
            if(given[i].right!=null){
                deep.push(given[i].right);
            }
        }
        if(deep.length>0){
            return findDeep(deep);
        }
        return given;
    }
    let deep=findDeep(start);
    return deep.reduce((previousValue, currentValue) => previousValue + currentValue.val,0);
};