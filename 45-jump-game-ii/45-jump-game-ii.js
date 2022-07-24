/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let dest = nums.length - 1;
    let fartest = [];
    fartest.length = nums.length
    fartest.fill(987654321);
    fartest[0]=0;
    for (let i = 0; i < dest; i++) {
        for (let j = i+1; j <= i + nums[i]; j++) {
            fartest[j]=fartest[j]>fartest[i]+1?fartest[i]+1:fartest[j];
        }
    }
    return fartest[dest]
};