/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    if (nums.length == 1) {
        return true;
    }
    let isIncrease;
    for (let i = 1; i <nums.length ; i++) {
        if(nums[i-1]==nums[i]){
            continue;
        }
        isIncrease = nums[i-1] < nums[i] ? true : false;
        break;
    }
    let prev = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if ((isIncrease && prev > nums[i]) || (!isIncrease && prev < nums[i])) {
            return false
        }
        prev = nums[i];
    }
    return true;
};