/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let bSearch=(ar)=>{
        let l=0;
        let r=ar.length-1;
        if(ar[l]<0){
            return ar.length;
        }
        while(l<=r){
            let p=Math.floor((l+r)/2);
            if(p==ar.length-1 || ar[p]>=0 && ar[p+1]<0){
                return ar.length-1-p;
            }else if(ar[p]>=0){
                l=p+1;
            }else if(ar[p]<0){
                r=p;
            }
        }
    }
    return grid.map(a=>bSearch(a)).reduce((sum,current)=>{
        return sum+current;
    },0)
};