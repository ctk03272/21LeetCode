/**
 * @param {number} n
 * @return {number}
 */
var saved=[];
var climbStairs = function(n) {
    //n=5
    return climbing(n);
};
var climbing=function(n){
    if(n==0){
        return 1;
    }
    if(n<0){
        return 0;
    }
    if(!saved[n]){
        saved[n]=climbing(n-2)+climbing(n-1);
    }
    return saved[n];
}
//top down 재귀 - time limit  // Memoization
//bottom up 