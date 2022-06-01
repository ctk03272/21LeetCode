class Solution {
	public void nextPermutation(int[] nums) {
		int end = nums.length - 1;
		int i;
		while (end > 0 && nums[end] <= nums[end - 1]) {
			end--;
		}
		if (end == 0) {
			reverseArray(nums, 0, nums.length - 1);
		} else {
			i = end;
			while (i < nums.length && nums[end - 1] < nums[i]) {
				i++;
			}
			int temp = nums[i - 1];
			nums[i - 1] = nums[end - 1];
			nums[end - 1] = temp;
			reverseArray(nums, end, nums.length - 1);
		}
	}

	public void reverseArray(int[] nums, int start, int end) {
		if (start < 0 || end >= nums.length) {
			return;
		}
		int size = nums.length;
		double mid = (double)(start + end) / 2;
		for (int i = start; i <= mid; i++) {
			int temp = nums[i];
			nums[i] = nums[size - i + start - 1];
			nums[size - i + start - 1] = temp;
		}
	}
}