/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let start=0;
    let end=0;
    let answer=0;
    let ks=[];
    while(end<nums.length){
        if(nums[end]==0){
            if(k==0){
                if(ks.length==0){
                    start=-1;
                }else{
                    start=ks.shift()+1;
                    ks.push(end);
                }
            }else{
                k--;
                ks.push(end);
            }
        }else{
            if(start==-1){
                start=end;
            }
        }
        if(start!=-1){
            answer=Math.max(answer,end-start+1);
        }
        end++;

    }
    return answer;
};