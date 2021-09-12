/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let answerList=[];
    let answer=[];
    candidates.sort();
    for (let i = 0; i <candidates.length ; i++) {
        let temp=[];
        temp.push(candidates[i]);
        if(candidates[i]==target){
            answer.push(temp);
        }
        answerList.push(temp);
    }

    while(answerList.length!=0){
        let temp=[];
        answerList.forEach(a=>{
            for (let i = 0; i <candidates.length ; i++) {
                let temp2=[...a];
                if(temp2[temp2.length-1]>candidates[i]){
                    continue;
                }
                temp2.push(candidates[i]);
                if(getSum(temp2)==target){
                    answer.push(temp2);
                }else if(getSum(temp2)<target){
                    temp.push(temp2);
                }
            }
        })
        answerList=temp;
    }

    return answer;
};

var getSum=function(list){
    return list.reduce((a, b) => a + b, 0);
}
