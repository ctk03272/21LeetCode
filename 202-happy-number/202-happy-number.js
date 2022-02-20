/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let hash=new Map();
    let getDisitSum=function(number){
        let sum=0
        while(number>0){
            let temp=number%10;
            sum += temp*temp; 
            number = parseInt(number/10);
        }
        return sum;
    }
    while(true){
        if(n==1 || hash.has(n)){
            break;
        }
        hash.set(n,true)
        n=getDisitSum(n);
    }
    return n==1?true:false;
    
};