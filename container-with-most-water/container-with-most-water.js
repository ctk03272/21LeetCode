/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let start = 0;
    let end = height.length - 1
    let max = 0;
    while (start < end) {
        max = Math.max(max, Math.min(height[start], height[end]) * Math.abs(end - start));
        if(height[start]<height[end]){
            start++
        }else{
            end--;
        }
    }

    return max;
};
console.log(maxArea([4,3,2,1,4]))