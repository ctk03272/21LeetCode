/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let findAnswer = function (n, k) {
        let ans = [];
        if (k > n || k < 0) {
            return ans;
        }
        if (k == 0) {
            ans.push([]);
            return ans;
        }
        ans = findAnswer(n - 1, k - 1);
        ans.forEach(a => a.push(n));
        let temp=findAnswer(n - 1, k);
        ans.push(...temp);
        return ans;
    }
    return findAnswer(n,k);
};
