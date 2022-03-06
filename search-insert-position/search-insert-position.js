var searchInsert = function(nums, target) {
    var start=0;
    var end=nums.length;
    var result=end;
    while(start<end){
        var mid=parseInt((start+end)/2);
        if(nums[mid]==target){
            result=mid;
            break;
        }else if(nums[mid]<target){
            start=mid+1;
        }else if(nums[mid]>target){
            end=mid;
            result=end;
        }
    }
    return result;    
};
