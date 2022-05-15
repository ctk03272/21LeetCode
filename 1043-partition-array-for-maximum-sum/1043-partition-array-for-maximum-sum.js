/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function(arr, k) {
    const length = arr.length;
    const dp = Array.from({length}, () => 0);
    for (let i = 0; i < k; i++) {
        dp[i] = Math.max(...arr.slice(0, i + 1)) * (i + 1);
    }
    for (let i = k; i < length; i++) {
        for (let j = 1; j <= k; j++) {
            dp[i] = Math.max(dp[i], dp[i - j] + Math.max(...arr.slice(i - j + 1, i + 1)) * j);
        }
    }

    return dp[length - 1];    
};