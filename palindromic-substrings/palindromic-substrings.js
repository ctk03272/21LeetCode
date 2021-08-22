/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    let n=s.length;
    let ar=new Array(n);
    let answer=0;
    for (let i = 0; i <n ; i++) {
        ar[i]=new Array(n);
    }
    let isPal=function (start,end) {
        if(start===end){
            ar[start][end]=2;
            return 2;
        }
        if (start + 1 === end) {
            if (s.charAt(start) === s.charAt(end)){
                ar[start][end]=2;
                return 2;
            }
            return 1;
        }

        if(ar[start][end] >= 1)
            return ar[start][end];

        if (s.charAt(start) !==s.charAt(end)){
            ar[start][end]=1;
            return 1;
        }
        else {
            return (ar[start][end] = isPal(start + 1, end - 1));
        }
    };
    for (let i = 0; i <n ; i++) {
        for (let j = i; j <n ; j++) {
            isPal(i,j);
            if(ar[i][j]===2){
                answer++;
            }
        }
    }
    return  answer;
};