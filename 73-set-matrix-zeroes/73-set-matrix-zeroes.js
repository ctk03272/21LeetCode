/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let m = matrix.length;
    let n = matrix[0].length;
    let isRowZero = false;
    let isColZero = false;

    for (let i = 0; i < n; i++) {
        if (matrix[0][i] === 0) {
            isRowZero = true;
        }
    }

    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            isColZero = true;
        }
    }


    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j]===0) {
                matrix[i][j] = 0;
            }
        }
    }
    if (isRowZero) {
        for (let i = 0; i < n; i++) {
            matrix[0][i] = 0;
        }
    }
    if (isColZero) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
    console.log(matrix)
};
