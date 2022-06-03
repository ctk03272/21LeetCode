class Solution {
	public int search(int[] nums, int target) {
		if (nums.length == 1) {
			return nums[0] == target ? 0 : -1;
		}
		int mid;
		int left = 0;
		int right = nums.length - 1;
		while (left <= right) {
			mid = (left + right) / 2;

			if (target == nums[mid]) {
				return mid;
			}
			if (nums[left] <= nums[mid]) {
				if (inRange(nums[left], nums[mid], target)) {
					right = mid - 1;
				} else {
					left = mid + 1;
				}
			} else {
				if (inRange(nums[mid + 1], nums[right], target)) {
					left = mid + 1;
				} else {
					right = mid - 1;
				}
			}
		}
		return -1;
	}

	public boolean inRange(int start, int end, int target) {
		if (target >= start && target <= end) {
			return true;
		} else {
			return false;
		}
	}
}