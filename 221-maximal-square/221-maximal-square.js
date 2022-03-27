/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    let n=matrix.length;
    let m=matrix[0].length;
    let ans=0;
    const dp = Array.from(Array(n), () => new Array(m))
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(matrix[i][j]==="1"){
                dp[i][j]=1;
                ans=1;
            }else{
                dp[i][j]=0;
            }
        }        
    }

    for(let i=1;i<n;i++){
        for(let j=1;j<m;j++){
            if(matrix[i][j]=="1" && matrix[i-1][j]==="1" && matrix[i][j-1]==="1" && matrix[i-1][j-1]==="1"){
                dp[i][j]=1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
                ans=Math.max(dp[i][j],ans);
            }
        }        
    }
    return ans*ans;
};