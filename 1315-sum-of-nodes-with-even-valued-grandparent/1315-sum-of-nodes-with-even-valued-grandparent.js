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
var sumEvenGrandparent = function(root) {
    let answer=0;
    let son=[];
    son.push(false);
    son.push(false);
    let findGrandSon=function(root,son){
        if(son.shift()){
            answer+=root.val;
        }
        let isEven=root.val%2==0;
        if(isEven){
            son.push(true)
        }else{
            son.push(false)
        }
        if(root.left!=null){
            findGrandSon(root.left,son.slice())
        }
        if(root.right!=null){
            findGrandSon(root.right,son.slice())          
        }
    }
    findGrandSon(root,son);
    return answer;
};