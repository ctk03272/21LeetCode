/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    return intervals.reduce(function (accumulator, currentValue) {
        if (accumulator.length === 0) {
            return [currentValue];
        }
        let last = accumulator[accumulator.length - 1];
        let lastStart = last[0];
        let lastEnd = last[1];
        let currentStart = currentValue[0];
        let currentEnd = currentValue[1];

        if (lastEnd >= currentStart) {
            let mergeAr = [];
            mergeAr.push(lastStart);
            mergeAr.push(Math.max(lastEnd,currentEnd));
            accumulator.splice(accumulator.length - 1, 1, mergeAr)
            return accumulator ;
        }
        accumulator.push(currentValue);
        return accumulator;
    }, []);
};
