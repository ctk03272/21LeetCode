/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let answer = Array.from({length: rowIndex + 1}, () => 0);
    answer[0] = 1;
    let index = 1;
    while (index<=rowIndex) {
        let prev=answer[0];
        for (let i = 1; i < index; i++) {
            let now=prev;
            prev=answer[i];
            answer[i] = now + answer[i];

        }
        answer[index] = 1;
        index++;
    }
    return answer;
};