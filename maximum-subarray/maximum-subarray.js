/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let findMax = function (nums) {
        if (nums.length === 1) {
            return nums[0];
        } else if (nums.length === 0) {
            return -Infinity;
        } else {
            let start = 0;
            let end = nums.length - 1;
            let mid = Math.floor((start + end) / 2);

            let leftMax = findMax(nums.slice(start, mid));
            let rightMax = findMax(nums.slice(mid + 1, end + 1));

            let midMax = nums[mid];
            let temp = nums[mid];
            for (let i = mid + 1; i <= end; i++) {
                temp += nums[i];
                midMax = Math.max(midMax, temp);
            }
            temp = midMax;
            for (let i = mid-1; i >= 0; i--) {
                temp += nums[i];
                midMax = Math.max(midMax, temp);
            }
            return Math.max(leftMax, rightMax, midMax);
        }

    }
    return findMax(nums);
};