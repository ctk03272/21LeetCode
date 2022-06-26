class Solution {
	private final static char ASTRIX = '*';
	private final static char DOT = '.';

	public boolean isMatch(String s, String p) {
		int sLenth = s.length();
		int pLength = p.length();
        			if (p == null || pLength == 0) {

		if (s == null || sLenth == 0) {
				return true;
			} else {
				return false;
			}
		}
		boolean dp[][] = new boolean[sLenth + 1][pLength + 1];
		for (int i = 0; i <= pLength; i++) {
			if (i == 0) {
				dp[0][i] = true;
				continue;
			} else if (i == 1) {
				continue;
			}
			if ((p.charAt(i - 1) == ASTRIX) && dp[0][i - 2]) {
				dp[0][i] = dp[0][i - 2];
			}
		}
		for (int j = 1; j <= pLength; j++) {
			for (int i = 1; i <= sLenth; i++) {
				if (p.charAt(j - 1) == s.charAt(i - 1)) {
					dp[i][j] = dp[i - 1][j - 1];
				} else if (p.charAt(j - 1) == DOT) {
					dp[i][j] = dp[i - 1][j - 1];
				} else if (p.charAt(j - 1) == ASTRIX) {
					if (dp[i][j - 2] || ((s.charAt(i - 1) == p.charAt(j - 2) || p.charAt(j - 2) == DOT))&& dp[i - 1][j]) {
						dp[i][j] = true;
					}
				}
			}
		}
		return dp[sLenth][pLength];
	}
}