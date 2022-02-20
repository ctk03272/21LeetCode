var longestPalindrome = function (s) {
    let sArray;
    let length;
    let dp;
    let answerLength = -1;
    let answer = "";

    let isPalindrome = function (start, end) {
        if (start == end) {
            return 2;
        }

        if (start + 1 == end) {
            if (sArray[start] == sArray[end]) {
                return 2;
            }
            return 1;
        }

        if (dp[start][end] >= 1) {
            return dp[start][end];
        }

        if (sArray[start] != sArray[end]) {
            return 1;
        } else {
            return (dp[start][end] = isPalindrome(start + 1, end - 1));
        }
    }
    sArray = Array.from(s);
    length = sArray.length;
    dp = Array.from(Array(length), () => new Array(length));
    for (let i = 0; i < length; i++) {
        dp[i].fill(0);
    }

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            dp[i][j]=isPalindrome(i, j);
        }
    }

    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            if (dp[i][j] == 2 && answerLength < j - i) {
                answerLength = j - i;
                answer = s.substring(i, j+1);
            }
        }
    }
    return answer;
};
