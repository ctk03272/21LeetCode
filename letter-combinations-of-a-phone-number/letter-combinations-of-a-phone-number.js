/**
 * @param {string} digits
 * @return {string[]}
 */

let letterCombinations = function (digits) {
    let answer = [];
    let digitMap = new Map();
    digitMap.set(2, ['a', 'b', 'c']);
    digitMap.set(3, ['d', 'e', 'f']);
    digitMap.set(4, ['g', 'h', 'i']);
    digitMap.set(5, ['j', 'k', 'l']);
    digitMap.set(6, ['m', 'n', 'o']);
    digitMap.set(7, ['p', 'q', 'r', 's']);
    digitMap.set(8, ['t', 'u', 'v']);
    digitMap.set(9, ['w', 'x', 'y', 'z']);

    /**
     * @param {string} digits
     * @param {string} res
     */
    let dfs = function (digits, res) {
        if (digits.length == 0) {
            if(res.length>0){
                answer.push(res);
            }
            return;
        }
        let now = digits.charAt(0);
        let next = digitMap.get(Number(now));

        for (let i = 0; i <next.length; i++) {
            dfs(digits.substring(1,digits.length),res+next[i]);
        }
    }

    dfs(digits, "");

    return answer;
};