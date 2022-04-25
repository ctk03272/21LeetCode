/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let dp=Array.from({length: n+1} , () => 0);
    for(let i=1;i<=n;i++){
        dp[i]=dp[i >> 1] + i % 2;
    }
    return dp
};
