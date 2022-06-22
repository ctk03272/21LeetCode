class Solution {
	public int removeDuplicates(int[] nums) {
		int prev = nums[0];
		int count = 1;
		int ans = 1;
		for (int i = 1; i < nums.length; i++) {
			int now = nums[i];
			if (prev == now) {
				count++;
				if (count > 2) {
					continue;
				} else {
					nums[ans++] = nums[i];
				}
			} else {
				count = 1;
				nums[ans++] = nums[i];
				prev=nums[i];
			}
		}
		return ans;
	}
}