/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let island=0;
    let border=0;
    for (let i = 0; i <grid.length ; i++) {
        for (let j = 0; j <grid[i].length; j++) {
            if(grid[i][j]==1){
                island++;
                if(j+1<grid[i].length&& grid[i][j+1]==1){
                    border++;
                }
                if(i+1<grid.length && grid[i+1][j]==1){
                    border++;
                }
            }
        }
    }
    return island*4-border*2;
};