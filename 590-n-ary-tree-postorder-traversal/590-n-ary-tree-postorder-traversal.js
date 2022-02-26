/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let answer=[];
    if(root==null){
        return [];
    }
    let addPostOrder=function(root){
        let children=root.children;
        for(let i=0;i<children.length;i++){
            addPostOrder(children[i]);
        }
        answer.push(root.val);
    }
    addPostOrder(root);
    return answer;
};