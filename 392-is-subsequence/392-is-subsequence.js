/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let pointerS=0;
    let pointerT=0;
    
    if(s.length==0){
        return true
    }

    while(pointerT<t.length){
        if(s.charAt(pointerS) === t.charAt(pointerT)){
            pointerS++;
            pointerT++;
        }else {
            pointerT++;
        }
        
        if(pointerS===s.length){
            return true;
        }
    }
    return false;
};