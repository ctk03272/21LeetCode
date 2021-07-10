/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    let result = [];
    let prev=0;
    for (let i = 0; i < S.length;) {
        let index = S.lastIndexOf(S.charAt(i));
        let k = i;
        while (k < index) {
            let nextIndex=S.lastIndexOf(S.charAt(k));
            if(nextIndex>index){
                index=nextIndex;
            }
            k++;
        }
        result.push(index-prev+1);
        prev=k+1;
        i=k+1;
    }
    return result;
};