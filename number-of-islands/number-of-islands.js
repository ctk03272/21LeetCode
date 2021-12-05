/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function(grid) {
    let answer=0;
    let m=grid.length;
    let n=grid[0].length;
    let visit=Array.from(Array(m), () => new Array(n).fill(0));
    
    let checkIsland=function(i,j,count){
        if(i>=0 && i<m && j>=0 && j<n && grid[i][j]==1 && visit[i][j]==0){
            visit[i][j]=count;
            checkIsland(i+1,j,count);
            checkIsland(i,j+1,count);
            checkIsland(i-1,j,count);
            checkIsland(i,j-1,count);

        }
    }
    
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]!=0 && visit[i][j]==0){
                answer++;
                checkIsland(i,j,answer);
            }
        }
    }
    return answer;
};