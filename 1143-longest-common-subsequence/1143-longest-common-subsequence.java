
class Solution {
	public int longestCommonSubsequence(String text1, String text2) {
		int text1Length = text1.length();
		int text2Length = text2.length();
		int[][] dp = new int[text1Length][text2Length];
		if (text1.charAt(0) == text2.charAt(0)) {
			dp[0][0] = 1;
		}
		for (int i = 1; i < text1Length; i++) {
			dp[i][0] = text1.charAt(i) == text2.charAt(0) ? 1 : dp[i - 1][0];
		}

		for (int i = 1; i < text2Length; i++) {
			dp[0][i] = text1.charAt(0) == text2.charAt(i) ? 1 : dp[0][i - 1];
		}

		for (int i = 1; i < text1Length; i++) {
			for (int j = 1; j < text2Length; j++) {
				if (i == 0 && j == 0) {
					continue;
				}
				if (text1.charAt(i) == text2.charAt(j)) {
					dp[i][j] = dp[i - 1][j - 1] + 1;
				} else {
					dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
				}
			}
		}
		return dp[text1Length - 1][text2Length - 1];
	}
}