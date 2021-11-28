/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let map = new Map();
    map.set(0, 0);
    map.set(1, 0);
    map.set(2, 0);
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1);
    }
    let j,k,l;
    for (j = 0; j < map.get(0); j++) {
        nums[j]=0;
    }
    for (k=0; k < map.get(1); k++) {
        nums[j+k]=1;
    }
    for (l=0; l < map.get(2); l++) {
        nums[j+k+l]=2;
    }
};