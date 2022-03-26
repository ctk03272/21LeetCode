/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    let sorted=costs.sort((a,b)=>{
        return (a[0]-a[1])-(b[0]-b[1])}
    );
    let answer=0;
    let half=sorted.length/2;
    for(let i=0;i<half;i++){
        answer+=sorted[i][0]
    }
    for(let i=half;i<sorted.length;i++){
        answer+=sorted[i][1]
    }
    return answer;
};