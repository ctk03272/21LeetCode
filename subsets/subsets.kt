import kotlin.math.pow

class Solution {
    fun subsets(nums: IntArray): List<List<Int>>? {
        val result = mutableListOf<List<Int>>();
        fun makeArray(input: IntArray, output: IntArray) {
            if (input.isEmpty()) {
                result.add(output.toMutableList());
                return;
            }
            makeArray(input.drop(1).toIntArray(), output.plus(input[0]));
            makeArray(input.drop(1).toIntArray(), output);
        }
        makeArray(nums, IntArray(0));
        return result;
    }
}