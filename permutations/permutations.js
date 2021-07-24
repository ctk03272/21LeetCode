/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    this.answer=[];
    var used=new Array(nums.length);
    used.fill(false);
    let dfs=function (used,ans,length) {
        if(ans.length==length){
            this.answer.push([...ans]);
            return;
        }

        for(let i=0;i<nums.length;i++){
            if(used[i]){
                continue;
            }
            used[i]=true;
            ans.push(nums[i]);
            dfs(used,ans,length);
            ans.pop();
            used[i]=false;
        }
    }

    for(let i=0;i<nums.length;i++){
        used[i]=true;
        dfs(used,[nums[i]],nums.length);
        used[i]=false;
    }
    return this.answer;
};

