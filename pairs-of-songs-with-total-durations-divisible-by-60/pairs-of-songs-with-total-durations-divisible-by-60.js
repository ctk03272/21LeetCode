/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let remainder = new Array(60);
    remainder.fill(0);
    time.forEach(a => {
        let temp = a % 60;
        remainder[temp]++;
    })
    let answer = 0;
    answer += remainder[0]*(remainder[0]-1)/2;
    answer += remainder[30]*(remainder[30]-1)/2;
    for (let i = 1; i < remainder.length / 2; i++) {
        answer += remainder[i] * remainder[60 - i];
    }
    return answer;
};