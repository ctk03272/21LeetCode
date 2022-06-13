class Solution {
	List<List<Integer>> ans;
	int n;
	int k;

	public List<List<Integer>> combine(int n, int k) {
		this.n = n;
		this.k = k;
		this.ans = new ArrayList<>();
		makeCombination(new ArrayList<Integer>(), 1);
		return ans;
	}

	public void makeCombination(List<Integer> list, int index) {
		if (list.size() == k) {
			ans.add(list);
			return;
		}
		for (int i = index; i <= n; i++) {
			List<Integer> temp = new ArrayList<>(list);
			temp.add(i);
			makeCombination(temp, i + 1);
		}
	}
}