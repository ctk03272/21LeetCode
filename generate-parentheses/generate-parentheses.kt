class Solution {
    fun generateParenthesis(n: Int): List<String> {
        val result = mutableListOf<String>();
        fun makeArray(left: Int, right: Int, parentheses: String, input: String) {
            if (left == n && right == n) {
                result.add(parentheses + input);
                return;
            }
            if (left > n || right > n || left < right) {
                return;
            }
            makeArray(left+1,right,parentheses+input,"(");
            makeArray(left,right+1,parentheses+input,")");
        }
        makeArray(1,0,"","(");
        return result        
    }
}