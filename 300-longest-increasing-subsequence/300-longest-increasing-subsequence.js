/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let ar=Array.from({length: nums.length}, () => 0);
    let answer=0;
    for (const x of nums) {
        let i = 0;
        let j = answer;
        while (i != j) {
            let m = Math.floor((i + j) / 2);
            if (ar[m] < x){
                i=m+1;
            }else{
                j = m;
            }

        }
        ar[i] = x;
        if (i == answer){
            ++ answer;
        }
    }
    return answer;
};