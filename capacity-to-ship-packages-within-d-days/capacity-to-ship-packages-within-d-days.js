/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
    let right = weights.reduce((previousValue, currentValue) => previousValue + currentValue);
    let left = 0;

    /**
     * @param {number[]} weights
     * @param {number} mid
     * @return {number}
     */
    let getTaskDay = function (weights, mid) {
        let ans = 0;
        let temp = 0;
        for (let i = 0; i < weights.length; i++) {
            temp += weights[i];
            if (weights[i] > mid) {
                return 987654321;
            }
            if (i == weights.length - 1 || temp + weights[i + 1] > mid) {
                ans++;
                temp = 0;
            }
        }

        return ans;
    }

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let taskDay = getTaskDay(weights, mid);
        if (taskDay < days) {
            right = mid;
        } else if (taskDay > days) {
            left = mid + 1;
        } else if (taskDay == days) {
            if (getTaskDay(weights, mid - 1) != taskDay) {
                return mid;
            } else {
                right = mid - 1;
            }
        }
    }
    return left;
};
