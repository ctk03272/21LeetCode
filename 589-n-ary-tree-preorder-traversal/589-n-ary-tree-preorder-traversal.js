/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let stack=[];
    let answer=[];
    stack.push(root);
    if(root==null){
        return answer;
    }
    
    while(stack.length>0){
        let now=stack.shift();
        answer.push(now.val);
        if(now.children!=null){
            for(let i=now.children.length-1;i>=0;i--){
                stack.unshift(now.children[i]);
            }            
        }
    }
    return answer;
};