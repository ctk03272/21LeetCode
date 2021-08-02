import kotlin.math.pow

class Solution {
    fun subsets(nums: IntArray): List<List<Int>>? {
        val result = mutableListOf<Int>();
        val numTranslate = nums.map { a -> a + 10 }.toIntArray();
        fun makeArray(input: IntArray, output: Int) {
            if (input.isEmpty()) {
                result.add(output)
                return;
            }
            val now = input[0];
            makeArray(input.drop(1).toIntArray(), output or 2.0.pow(now).toInt());
            makeArray(input.drop(1).toIntArray(), output);
        }
        makeArray(numTranslate, 0);
        return result.map { a ->
            val binary = Integer.toBinaryString(a).reversed();
            val result = mutableListOf<Int>();
            binary.toCharArray().forEachIndexed { index, c ->
                if (c == '1') {
                    result.add(index-10)
                }
            }
            return@map result;
        }
    }
}