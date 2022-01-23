/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let ans = nums[0];
    let n = nums.length;
    let start = 1;
    let end = 1;
    for (let i = 0; i < n; i++) {
        if (nums[i] == 0) {
            start = 1;
            ans=Math.max(ans,0);
        } else {
            start *= nums[i];
            ans = Math.max(ans, start);
        }
    }
    for (let i = n-1; i >=0 ; i--) {
        if (nums[i] == 0) {
            end = 1;
            ans=Math.max(ans,0);
        } else {
            end *= nums[i];
            ans = Math.max(ans, end);
        }
    }
    return ans;
};