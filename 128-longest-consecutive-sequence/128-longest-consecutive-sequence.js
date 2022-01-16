/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let answer = 0;
    let table = new Map();
    for (let i = 0; i < nums.length; i++) {
        let now = nums[i];
        if(table.has(now)){
            continue;
        }
        if (table.has(now + 1) || table.has(now - 1)) {
            let right = table.get(now + 1) ? table.get(now + 1) : 0;
            let left = table.get(now - 1) ? table.get(now - 1) : 0;
            table.set(now, left + right + 1);
            table.set(now - left, left + right + 1);
            table.set(now + right, left + right + 1);
            answer = Math.max(answer, left + right + 1);
        } else {
            table.set(now, 1);
            answer = Math.max(answer, 1);
        }
    }

    return answer
};