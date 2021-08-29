/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let numberMap=new Map();

    for(let i=0;i<nums.length;i++){
        if(numberMap.has(nums[i])){
            numberMap.set(nums[i],numberMap.get(nums[i])+1);
        }else{
            numberMap.set(nums[i],1);
        }
    }
    let keyAr=Array.from(numberMap.keys()).sort((a,b)=>numberMap.get(b)-numberMap.get(a)).slice(0,k);
    return keyAr;
};