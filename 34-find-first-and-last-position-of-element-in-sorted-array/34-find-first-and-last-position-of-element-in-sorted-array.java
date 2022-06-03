class Solution {
	public int[] searchRange(int[] nums, int target) {
		if (nums.length == 1) {
			return nums[0] == target ? new int[] {0, 0} : new int[] {-1, -1};
		}
		ArrayList<Integer> arrayList = new ArrayList<>();
		int mid;
		int left = 0;
		int right = nums.length - 1;
		while (left <= right) {
			mid = (left + right) / 2;
			if (nums[mid] == target && (mid == 0 || nums[mid] != nums[mid - 1])) {
				arrayList.add(mid);
				break;
			}

			if (target < nums[mid] || (nums[mid] == target) && nums[mid] == nums[mid - 1]) {
				right = mid - 1;
			} else {
				left = mid + 1;
			}
		}

		left = 0;
		right = nums.length - 1;
		while (left <= right) {
			mid = (left + right) / 2;
			if (nums[mid] == target && (mid == nums.length - 1 || nums[mid] != nums[mid + 1])) {
				arrayList.add(mid);
				break;
			}

			if (target > nums[mid] || (nums[mid] == target) && nums[mid] == nums[mid + 1]) {
				left = mid + 1;
			} else {
				right = mid - 1;
			}
		}
		return arrayList.size() == 0 ? new int[] {-1, -1} : arrayList.stream().mapToInt(a -> a).toArray();
	}
}