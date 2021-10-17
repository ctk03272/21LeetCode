/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let ans = [];
    ans.push(1);
    ans.push(1);
    for (let i = 2; i <= n; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            temp += ans[j] * ans[i - j - 1];
        }
        ans.push(temp)
    }
    return ans[n];
};