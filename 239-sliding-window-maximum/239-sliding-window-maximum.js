/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

Array.prototype.peek = function () {
  if (this.length === 0) {
    throw new Error("out of bounds");
  }
  return this[this.length - 1];
};

var maxSlidingWindow = function(nums, k) {
    let window=[];
    let answer=[];
    
    if(nums.length==0){
        return answer;
    }
    for(let i=0;i<k;i++){
        while(window.length>0 && nums[i] >= nums[window.peek()]){
            window.pop();
        }
        window.push(i);
    }
    answer.push(window[0]);

    for(let i=k;i<nums.length;i++){
        while(window.length>0 && nums[i] >= nums[window.peek()]){
            window.pop();
        }
        
        if(window.length>0 && window[0]<=i-k){
            window.shift();
        }
        window.push(i);
        answer.push(window[0]);
    }    
    return answer.map(a=>nums[a]);
};