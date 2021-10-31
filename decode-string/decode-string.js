/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {

    class Stack {
        constructor() {
            this._arr = [];
        }

        push(item) {
            this._arr.push(item);
        }

        pop() {
            return this._arr.pop();
        }

        peek() {
            return this._arr[this._arr.length - 1];
        }

        isEmpty() {
            return this._arr.length == 0 ? true : false;
        }
    }

    /**
     * @param {string} s
     * @return {string}
     */
    let getString = function (s) {
        let stack = new Stack();
        let start = 0;
        let end = 0;
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) == "[") {
                stack.push(i);
            } else if (s.charAt(i) == "]") {
                let temp = stack.pop();
                if (stack.isEmpty()) {
                    stack = temp + 1;
                    end = i;
                    break;
                }
            }
        }
        return s.substring(start + 1, end);
    }
    /**
     * @param {string} s
     * @return {string}
     */
    let dfs = function (s) {
        let returnString = "";
        let i = 0;
        while (i < s.length) {
            if (!isNaN(Number(s.charAt(i)))) {
                let repeatNumber=parseInt(s.substring(i));
                let repeatString = getString(s.substring(i + repeatNumber.toString().length, s.length));
                returnString += dfs(repeatString).repeat(repeatNumber);
                i += repeatString.length+repeatNumber.toString().length+2;
            } else {
                returnString += s.charAt(i);
                i++;
            }
        }
        return returnString;
    }
    return dfs(s);
};