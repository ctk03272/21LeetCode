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
    let answer=[];
    let start=[];
    start.push(root)
    let findEven=function(given){
        let deep=[];
        for(let i=0;i<given.length;i++){
            console.log(given[i].val)
            if(given[i].val%2==0){
                answer.push(given[i]);
            }
            if(given[i].left!=null){
                deep.push(given[i].left);
            }
            if(given[i].right!=null){
                deep.push(given[i].right);
            }
        }
        if(deep.length>0){
            return findEven(deep);
        }
    }
    findEven(start)
    let son=[];
    let grandSon=[];
    for(let i=0;i<answer.length;i++){
        if(answer[i].left!=null){
            son.push(answer[i].left);
        }
        if(answer[i].right!=null){
            son.push(answer[i].right);
        }        
    }
    for(let i=0;i<son.length;i++){
        if(son[i].left!=null){
            grandSon.push(son[i].left);
        }
        if(son[i].right!=null){
            grandSon.push(son[i].right);
        }        
    }
    return grandSon.reduce((previousValue, currentValue) => previousValue + currentValue.val,0);
};