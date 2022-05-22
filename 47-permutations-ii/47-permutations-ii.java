
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;
import java.util.function.Function;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        solution.permuteUnique(new int[] { 1, 1, 2 });
    }
}

class Solution {
    List<List<Integer>> answerList = new ArrayList<>();
    Map<Integer, Long> numsCount = new HashMap<>();
    int len;

    public List<List<Integer>> permuteUnique(int[] nums) {
        len = nums.length;
        Arrays.sort(nums);
        numsCount = Arrays.stream(nums).boxed().collect(
                Collectors.groupingBy(Function.identity(), Collectors.counting()));

        permutation(0, nums, new Stack<Integer>());

        return answerList;
    }

    public void permutation(int count, int[] nums, Stack<Integer> stack) {
        if (count == len) {
            answerList.add(new ArrayList<>(stack));
            return;
        }
        int now = Integer.MIN_VALUE, prev = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            now = nums[i];
            if (i != 0) {
                prev = nums[i - 1];
            }
            if (numsCount.containsKey(now) && numsCount.get(now) == 0) {
                continue;
            }
            if(now==prev){
                continue;
            }
            stack.push(now);
            numsCount.put(now, numsCount.get(now) - 1);
            permutation(count + 1, nums, stack);
            numsCount.put(now, numsCount.get(now) + 1);
            stack.pop();
        }
    }
}