class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        int center = nums1.length / 2;
        for (int i = 0; i < nums1.length; i++) {
            if (i < center) {
                maxHeap.add(nums1[i]);
            } else {
                minHeap.add(nums1[i]);
            }
        }

        for (int i = 0; i < nums2.length; i++) {
            if (minHeap.isEmpty() && maxHeap.isEmpty()) {
                minHeap.add(nums2[i]);
                continue;
            }
            int now = nums2[i];
            if (minHeap.size() == maxHeap.size()) {
                int maxFromMax = maxHeap.peek();
                if (now > maxFromMax) {
                    minHeap.add(now);
                } else {
                    minHeap.add(maxHeap.poll());
                    maxHeap.add(now);
                }
            } else {
                int minFromMin = minHeap.peek();
                if (now < minFromMin) {
                    maxHeap.add(now);
                } else {
                    maxHeap.add(minHeap.poll());
                    minHeap.add(now);
                }
            }
        }
        return minHeap.size() == maxHeap.size() ? (double) (maxHeap.poll() + minHeap.poll()) / 2 : minHeap.poll();
    }
}