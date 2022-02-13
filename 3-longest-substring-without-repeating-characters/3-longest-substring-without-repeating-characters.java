class Solution {
    public int lengthOfLongestSubstring(String s) {
        int answer=0;
        Map<Character,Integer> isInsideString=new HashMap<>();
        char[] inputCharArray=s.toCharArray();
        int start=0;
        int end=0;
        for (int i = 0; i < inputCharArray.length; i++) {

            if(isInsideString.containsKey(inputCharArray[i]) && isInsideString.get(inputCharArray[i])>=start){
                start=isInsideString.get(inputCharArray[i])+1;
                isInsideString.put(inputCharArray[i],i);
            }else{
                isInsideString.put(inputCharArray[i],i);
            }
            if(answer<i-start+1){
                answer=i-start+1;
            }
        }
        if(answer<isInsideString.size()-1-start+1){
            answer=isInsideString.size()-1-start+1;
        }
        return answer;
    }
}