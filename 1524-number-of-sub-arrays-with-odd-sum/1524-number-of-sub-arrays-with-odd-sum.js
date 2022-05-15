/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
    const length = arr.length;
    const mod = Math.pow(10, 9) + 7;
    //dp[i][0] for even dp[i][1] for odd
    const dp = Array.from(Array(length), () => Array(2).fill(0));
    if (arr[0] % 2 == 0) {
        dp[0][0] = 1;
    } else {
        dp[0][1] = 1;
    }
    let answer = dp[0][1];
    for (let i = 1; i < length; i++) {
        if (arr[i] % 2 == 0) {
            dp[i][0] = (dp[i - 1][0] + 1);
            dp[i][1] = (dp[i - 1][1]);
        } else {
            dp[i][0] = dp[i - 1][1] ;
            dp[i][1] = (dp[i - 1][0] + 1);
        }
        answer = (answer + dp[i][1]) % mod;
    }
    return answer;
};
