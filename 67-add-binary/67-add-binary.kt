class Solution {
    fun addBinary(a: String, b: String): String {
        val newA: String
        val newB: String
        val maxLength = a.length.coerceAtLeast(b.length);
        var answer = "";
        var carry = 0;
        if (a.length > b.length) {
            newB = "0".repeat(a.length - b.length).plus(b);
            newA = a;
        } else {
            newA = "0".repeat(b.length - a.length).plus(a);
            newB = b;
        }
        for (i in maxLength - 1 downTo 0) {
            val now = carry + Character.getNumericValue(newA[i]) + Character.getNumericValue(newB[i]);
            if (now == 3) {
                answer = "1".plus(answer);
                carry = 1;
            } else if (now == 2) {
                answer = "0".plus(answer);
                carry = 1;
            } else if (now == 1) {
                answer = "1".plus(answer);
                carry = 0;
            } else if (now == 0) {
                answer = "0".plus(answer);
                carry = 0;
            }
        }
        if (carry == 1) {
            return "1".plus(answer);
        } else {
            return answer;
        }
    }
}
