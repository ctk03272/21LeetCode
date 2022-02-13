/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
    nums.sort((a, b) => a - b);
    let start = 0;
    let end = nums.length - 1;
    let answer = 0;
    let mod = Math.pow(10, 9) + 7;
    let pow = [1];
    for (let i = 1; i < nums.length; i++) {
        pow.push(pow[i - 1] * 2 % mod);
    }
    while (start <= end) {
        if (nums[start] + nums[end] > target) {
            end--;
        } else {
            answer = (answer + pow[end - start]) % mod;
            start++;
        }
    }
    return answer;
};