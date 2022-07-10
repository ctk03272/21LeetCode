/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0;
    let max = Math.max(num1.length, num2.length);
    if (num1.length > num2.length) {
        num2 = "0".repeat(num1.length - num2.length) + num2;
    } else {
        num1 = "0".repeat(num2.length - num1.length) + num1;
    }
    let answer = "";
    for (let i = max - 1; i >= 0; i--) {
        let now = carry + (num1[i] - '0') + (num2[i] - '0');
        if (now >= 10) {
            carry = 1;
            now = now - 10;
        } else {
            carry = 0;
        }
        answer = now + answer;
    }
    if (carry == 1) {
        answer = carry + answer;
    }
    return answer;
};