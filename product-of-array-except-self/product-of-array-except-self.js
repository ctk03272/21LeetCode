/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output=[1,nums[0]];
    let temp=nums[nums.length-1];
    for (let i = 2; i <nums.length ; i++) {
        output[i]=output[i-1]*nums[i-1];
    }
    for (let i = nums.length-2;i>=0; i--) {
        output[i]*=temp;
        temp*=nums[i];
    }
    return output;
};