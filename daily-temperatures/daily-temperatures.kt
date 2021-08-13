class Solution {
    fun dailyTemperatures(temperatures: IntArray): IntArray {
        var answer = IntArray(temperatures.size) { _ -> 0};
        var st = Stack<Int>();
        for (i: Int in temperatures.indices) {
            while (!st.isEmpty()) {
                if (temperatures[st.peek()] < temperatures[i]) {
                    answer[st.peek()] = i - st.pop();
                }else{
                    st.push(i);
                    break
                }
            }
            if (st.isEmpty()) {
                st.push(i);
            }
        }
        return answer;
    }
}