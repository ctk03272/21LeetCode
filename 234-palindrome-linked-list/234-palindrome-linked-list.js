/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let answer=true;
    let fast=head;
    let slow=head;
    while(fast !=null && fast.next!=null){
        fast=fast.next.next;
        slow=slow.next;
    }
    if(fast!=null){
        slow=slow.next;
    }
    fast=head;
    let reverse=function(head){
        let prev=null;
        while(head!=null){
            let next=head.next;
            head.next=prev;
            prev=head;
            head=next;
        }
        return prev;
    }
    slow=reverse(slow);
    while(slow!=null & fast!=null){
        if(fast.val!=slow.val){
           answer=false;
           break;
        }
        fast=fast.next;
        slow=slow.next;
    }
    return answer;
};