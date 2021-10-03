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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let answer=[];
    let nowQue=new Queue();
    let nextQue=new Queue();
    let right=root;
    nowQue.enqueue(root);

    if(root==null){
        return [];
    }
    
    while (true){
        let right;
        while(!nowQue.isEmpty()){
            let nowNode=nowQue.dequeue();
            right=nowNode.val;
            if(nowNode.left){
                nextQue.enqueue(nowNode.left)
            }
            if(nowNode.right){
                nextQue.enqueue(nowNode.right)
            }
        }
        answer.push(right)
        if(nextQue.isEmpty()){
            break;
        }
        nowQue=nextQue;
        nextQue=new Queue();
    }
    return answer;
};

class myQueue {
    constructor() {
        this._arr = [];
    }
    enqueue(item) {
        this._arr.push(item);
    }
    dequeue() {
        return this._arr.shift();
    }
    isEmpty(){
        return this._arr.length==0?true:false;
    }
}