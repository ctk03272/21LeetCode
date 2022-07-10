/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let height = board.length;
    let width = board[0].length;
    let dx = [1, 0, -1, 0];
    let dy = [0, 1, 0, -1];
    let answer = false;

    let startSearch = function (x, y) {
        let searchHistory = new Array(height);
        for (let i = 0; i < searchHistory.length; i++) {
            let tempAr = new Array(width);
            tempAr.fill(false);
            searchHistory[i] = tempAr;
        }

        let search = function (i, x, y) {
            searchHistory[y][x] = true;
            if (board[y][x] == word.charAt(i)) {
                if (i+1 == word.length) {
                    answer = true;
                    return;
                }
                for (let j = 0; j < 4; j++) {
                    let newX = x + dx[j];
                    let newY = y + dy[j];
                    if (newY >= 0 && newY < height && newX >= 0 && newX < width && !searchHistory[newY][newX] ) {
                        search(i + 1, newX, newY);
                    }
                }
                searchHistory[y][x] = false;
            } else {
                searchHistory[y][x] = false;
                return;
            }
        }
        search(0, x, y);
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (!answer) startSearch(j, i);
        }
    }
    return answer;
};