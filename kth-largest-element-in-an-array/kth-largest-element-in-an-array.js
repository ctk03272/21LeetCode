/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k=nums.length-k;
    let swap=function(start,end){
        let temp=nums[start];
        nums[start]=nums[end];
        nums[end]=temp;
    }
    let partition=function(start,end){
        let pivot=nums[Math.floor((start+end)/2)];
        while(start<=end){
            while(nums[start]<pivot){
                start++;
            }
            while(nums[end]>pivot){
                end--;
            }
            if(start<=end){
                swap(start,end);
                start++;
                end--;
            }
        }
        return start;
    }
    let quickSort=function(start,end){
        let temp=partition(start,end);
        if(start<temp-1){
            quickSort(start,temp-1)
        }
        if(temp<end){
            quickSort(temp,end)
        }

    }
    quickSort(0,nums.length-1)
    return nums[k]
};
