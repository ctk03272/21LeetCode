/**
 * @param {string} current
 * @param {string} correct
 * @return {number}
 */
var convertTime = function (current, correct) {
    let currentSplit = current.split(":");
    let correctSplit = correct.split(":");
    let currentSum = 60 * Number(currentSplit[0]) + Number(currentSplit[1]);
    let correctSum = 60 * Number(correctSplit[0]) + Number(correctSplit[1]);

    let dp = Array.from({length: correctSum - currentSum + 1}, () => -1);
    dp[0] = 0;
    let times = [1, 5, 15, 60];

    for (let i = 1; i <= correctSum - currentSum; i++) {
        dp[i] = Infinity;
        for (let j = 0; j < times.length; j++) {
            if (i - times[j] >= 0) {
                dp[i]=Math.min(dp[i],dp[i-times[j]]+1);
            }
        }
    }
    return dp[correctSum-currentSum];
};