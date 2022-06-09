class Solution {
	public int[][] insert(int[][] intervals, int[] newInterval) {
		if (intervals.length == 0) {
			return new int[][] {{newInterval[0], newInterval[1]}};
		}
		ArrayList<int[]> ints = new ArrayList<>();
		boolean addNewInterval = false;
		for (int i = 0; i < intervals.length; i++) {
			if (intervals[i][0] > newInterval[0] && !addNewInterval) {
				ints.add(newInterval);
				addNewInterval = true;
			}
			ints.add(intervals[i]);
		}
		if(!addNewInterval){
			ints.add(newInterval);
		}
		ArrayList<int[]> ans = new ArrayList<>();
		ints.stream().forEachOrdered(current -> {
			if (ans.isEmpty()) {
				ans.add(current);
				return;
			}
			int[] last = ans.get(ans.size() - 1);
			int lastStart = last[0];
			int lastEnd = last[1];
			int currentStart = current[0];
			int currentEnd = current[1];

			if (lastEnd >= currentStart) {
				int[] merged = new int[2];
				merged[0] = lastStart;
				merged[1] = Math.max(lastEnd, currentEnd);
				ans.set(ans.size() - 1, merged);
				return;
			} else {
				ans.add(current);
				return;
			}
		});
		return ans.stream().toArray(int[][]::new);
	}
}