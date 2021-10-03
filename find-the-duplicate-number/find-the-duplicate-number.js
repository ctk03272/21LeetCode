/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let start=1;
    let end=nums.length-1;
    while(start<end){
        let mid=parseInt((start+end)/2);
        console.log(mid)
        let count=nums.filter(a=>a<=mid).length;
        console.log(count)
        if(count>mid){
            end=mid
        }else{
            start=mid+1;
        }
    }
    return start;
};