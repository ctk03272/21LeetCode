class Solution {
	List<List<Integer>> ans;
	int n;
	int k;

	public List<List<Integer>> combine(int n, int k) {
		List<List<Integer>> ans = new ArrayList<>();
		if (k > n || k < 0) {
			return ans;
		}

		if (k == 0) {
			ans.add(new ArrayList<>());
			return ans;
		}
		ans = combine(n - 1, k - 1);
		ans.stream().forEach(list -> list.add(n));
		ans.addAll(combine(n - 1, k));
		return ans;
	}
}