var maxProfit = function(prices) {
    let preMin=987654321;
    let result=0;
    let length=prices.length;
    for (let i = 0; i <length ; i++) {
        if(prices[i]-preMin>result){
            result=prices[i]-preMin;
        }
        if(preMin>prices[i]){
            preMin=prices[i];
        }
    }
    return result;
};
