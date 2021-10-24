
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

var flatten = function (root) {
    if(!root){
        return;
    }
    let leftTree=root.left;
    let rightTree=root.right;

    flatten(leftTree);
    flatten(rightTree);
    root.left=null;

    let cur=leftTree;
    while(cur!=null && cur.right!=null){
        cur=cur.right;
    }
    if(cur!=null){
        cur.right=rightTree;
        root.right=leftTree;
    }else{
        root.right=rightTree;
    }

};
