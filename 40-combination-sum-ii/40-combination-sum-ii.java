import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;


class Solution {
	List<List<Integer>> ans;
	HashMap<Integer, Integer> count;

	public List<List<Integer>> combinationSum2(int[] candidates, int target) {
		ans = new ArrayList<>();
		count = new HashMap<>();
		for (int i = 0; i < candidates.length; i++) {
			int now = candidates[i];
			if (!count.containsKey(now)) {
				count.put(now, 1);
			} else {
				count.put(now, count.get(now) + 1);
			}
		}
		getCombination(count.keySet().stream().mapToInt(a -> a).toArray(), 0, 0, target, new ArrayList<>());
		return ans;
	}

	public void getCombination(int[] candidates, int index, int sum, int target, List<Integer> now) {
		if (sum == target) {
			ans.add(now);
		} else if (sum > target) {
			return;
		} else {
			if (index == candidates.length) {
				return;
			}
			if (count.get(candidates[index]) == 1) {
				List<Integer> temp = new ArrayList<>(now);
				temp.add(candidates[index]);
				getCombination(candidates, index + 1, sum + candidates[index], target, new ArrayList<>(temp));
				getCombination(candidates, index + 1, sum, target, new ArrayList<>(now));
			} else {
				int nowCount = count.get(candidates[index]);
				int nowSum = sum;
				getCombination(candidates, index + 1, sum, target, new ArrayList<>(now));
				List<Integer> temp = new ArrayList<>(now);
				for (int i = 0; i < nowCount; i++) {
					temp.add(candidates[index]);
					nowSum = nowSum + candidates[index];
					getCombination(candidates, index + 1, nowSum, target, new ArrayList<>(temp));
				}
			}
		}
	}
}

