var minCostClimbingStairs = function (cost) {
    var sumCost = [];
    sumCost.length = cost.length + 1;
    sumCost[0] = 0;
    sumCost[1] = 0;
    for (let i = 2; i < cost.length; i++) {
        sumCost[i] = Math.min(sumCost[i - 1] + cost[i - 1], sumCost[i - 2] + cost[i - 2]);
    }
    return Math.min(sumCost[cost.length - 1] + cost[cost.length - 1], sumCost[cost.length - 2] + cost[cost.length - 2])
};