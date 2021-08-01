/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    let answer=[];
    answer.push(first);
    for (let i = 0; i <encoded.length ; i++) {
        answer.push(answer[answer.length-1] ^ encoded[i]);
    }
    return answer;
};