/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let answer = [];
    let directionX = [1, 0, -1, 0];
    let directionY = [0, 1, 0, -1];
    let i = 0, j = 0, k = 0;
    let n = matrix.length;
    let m = matrix[0].length;
    let isVisit = Array.from(Array(n), () => Array(m).fill(false));
    while (true) {
        if (i < 0 || i >= m || j < 0 || j >= n || isVisit[j][i] == true) {
            break;
        }
        answer.push(matrix[j][i]);
        isVisit[j][i] = true;
        let nextI = i + directionX[k];
        let nextJ = j + directionY[k];
        if (nextI < m && nextI >= 0 && nextJ >= 0 && nextJ < n && isVisit[nextJ][nextI] == false) {
            i = nextI;
            j = nextJ;
        } else {
            if (k == 3) {
                k = 0;
            } else {
                k = k + 1;
            }
            i = i + directionX[k];
            j = j + directionY[k];
        }
    }
    return answer;
};
