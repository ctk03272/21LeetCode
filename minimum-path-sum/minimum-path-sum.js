/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let sumGrid = new Array(m);

    for (let i = 0; i < m; i++) {
        let temp = new Array(n);
        sumGrid[i] = temp;
    }
    sumGrid[0][0] = grid[0][0];

    for (let i = 1; i < n; i++) {
        sumGrid[0][i] = grid[0][i] + sumGrid[0][i - 1];
    }

    for (let i = 1; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (j == 0) {
                sumGrid[i][j] = sumGrid[i - 1][j] + grid[i][j];
            } else {
                sumGrid[i][j] = Math.min(sumGrid[i - 1][j], sumGrid[i][j - 1]) + grid[i][j];
            }

        }
    }
    return sumGrid[m-1][n-1];
};