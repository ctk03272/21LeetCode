/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
        let table = new Map();
    for (let i = 0; i < s.length; i++) {
        if (table.has(s.charAt(i))) {
            table.set(s.charAt(i), table.get(s.charAt(i)) + 1)
        } else {
            table.set(s.charAt(i), 1);
        }
    }
    let answer=0;
    let odd=false;
    table.forEach(v=>{
        if(v%2==1){
            odd=true;
            if(v>2){
              answer+=v-1;              
            }

        }else{
            answer+=v;            
        }

    })
    console.log(table)
    if(odd){
        answer++;
    }
    return answer;
};