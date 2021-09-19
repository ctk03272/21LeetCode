/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    k=nums.length-k;
    let swap=function(list,start,end){
        let temp=list[start];
        list[start]=list[end];
        list[end]=temp;
    }
    let partition=function(list,start,end){
        let pivot=list[Math.floor((start+end)/2)];
        while(start<=end){
            while(list[start]<pivot){
                start++;
            }
            while(list[end]>pivot){
                end--;
            }
            if(start<=end){
                swap(list,start,end);
                start++;
                end--;
            }
        }
        return start;
    }
    let quickSort=function(list,start,end){
        let temp=partition(list,start,end);
        if(start<temp-1){
            quickSort(list,start,temp-1)
        }
        if(temp<end){
            quickSort(list,temp,end)
        }
        return list;
    }
    return quickSort(nums,0,nums.length-1)[k]
};