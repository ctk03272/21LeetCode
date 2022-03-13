/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let map={};
    let prev=head;
    let now=head;
    if(head==null){return null};
    while(now.next!=null){
        let val=now.val;
        if(map[now.val] || now.val==now.next.val){
            if(now==head){
                head=head.next;
            }
            now=now.next;
            prev.next=now;
        }else{
            let temp=now;
            now=now.next;
            prev=temp;
        }
        map[val]=true; 
    }
    if(map[now.val]){
        if(now==head){
            head=head.next;
        }
        now=now.next;
        prev.next=now;
    }
    return head;
};