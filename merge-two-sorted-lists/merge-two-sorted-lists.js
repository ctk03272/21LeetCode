var mergeTwoLists = function (l1, l2) {
    if(l1==null || l2==null){
        if(l1==null){
            return l2;
        }
        if(l2==null){
            return l1;
        }
        return null;
    }
    
    ListNode.prototype.addNode=function (addedListNode) {
        if(this==null){
            return addedListNode;
        }
        if(addedListNode==null){
            return this;
        }

        let answer=new ListNode();
        if(this.val>addedListNode.val){
            answer.val=addedListNode.val;
            if (addedListNode.next){
                answer.next=this.addNode(addedListNode.next);
            }else{
                answer.next=this;
            }
        }else{
            answer.val=this.val;
            if(this.next){
                answer.next=this.next.addNode(addedListNode);
            }else{
                answer.next=addedListNode;
            }
        }
        return answer;
    }
    
    return l1.addNode(l2);
};



