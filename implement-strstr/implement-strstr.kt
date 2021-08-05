class Solution {
    fun strStr(haystack: String, needle: String): Int {
        var start = 0;
        var count = 0;
        var i=0;
        if(needle.isEmpty()){
            return 0;
        }
        while (i<haystack.length){

            if(haystack[i]==needle[count]){
                count++;
                i++;
            }else{
                i=start+1;
                start=i;
                count=0;
            }
            
                        if(count==needle.length){
                return start;
            }else if(start+count==haystack.length){
                return -1;
            }
        }
        return -1;
    }
}