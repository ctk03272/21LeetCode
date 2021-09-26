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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let ar=[];
    ar.push(root);
    if(root==null){
        return [];
    }
    let answer=[[root.val]];
    while(ar.length!=0){
        let temp=[];
        for(let i=0;i<ar.length;i++){
            if(ar[i].left!=null){
                temp.push(ar[i].left);
            }
             if(ar[i].right!=null){
                 temp.push(ar[i].right);
            }
           
        }
        ar=[...temp];
        if(temp.length!=0){
         answer.push(temp.map(a=>a.val));   
        }
        
    }
    return answer;
};