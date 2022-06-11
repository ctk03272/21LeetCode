class Solution {
	public int[][] generateMatrix(int n) {
		int ans[][] = new int[n][n];
		int[] directionX = new int[] {1, 0, -1, 0};
		int[] directionY = new int[] {0, 1, 0, -1};
		boolean[][] isVisit = new boolean[n][n];
		int i = 0, j = 0, k = 0, count = 1;
		while (true) {
			if (i < 0 || i >= n || j < 0 || j >= n || isVisit[j][i] == true) {
				break;
			}
			ans[j][i] = count;
			isVisit[j][i] = true;
			int nextI = i + directionX[k];
			int nextJ = j + directionY[k];
			if (nextI < n && nextI >= 0 && nextJ >= 0 && nextJ < n && isVisit[nextJ][nextI] == false) {
				i = nextI;
				j = nextJ;
			} else {
				if (k == 3) {
					k = 0;
				} else {
					k = k + 1;
				}
				i = i + directionX[k];
				j = j + directionY[k];
			}
			count++;
		}
		return ans;
	}
}