class Solution {
    fun plusOne(digits: IntArray): IntArray {
        var length = digits.size;
        var add = 1
        for (i: Int in length - 1 downTo 0) {
            var temp = digits[i] + add
            if (temp == 10) {
                add = 1
                temp = 0
            } else {
                add = 0
            }
            digits[i] = temp
        }
        if (add==1){
            return intArrayOf(1).plus(digits)
        }
        return digits;
    }
}