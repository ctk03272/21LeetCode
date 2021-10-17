/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let sumGrid = new Array(m);

    for (let i = 0; i < m; i++) {
        let temp = new Array(n);
        sumGrid[i] = temp;
    }
    sumGrid[0][0] = 1;

    for (let i = 1; i < n; i++) {
        sumGrid[0][i] = sumGrid[0][i - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j == 0) {
                sumGrid[i][j] = sumGrid[i - 1][j];
            } else {
                sumGrid[i][j] = sumGrid[i - 1][j] + sumGrid[i][j - 1];
            }

        }
    }
    return sumGrid[m - 1][n - 1];    
};