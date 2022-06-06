
class Solution {
	public String countAndSay(int n) {
		String ans = "1";
		while (n > 1) {
			ans = say(ans);
			n--;
		}
		return ans;
	}

	public String say(String target) {
		char prev = target.charAt(0);
		char now = target.charAt(0);
		int count = 0;
		StringBuilder stringBuilder = new StringBuilder();
		for (int i = 0; i < target.length(); i++) {
			now = target.charAt(i);
			if (now == prev) {
				count++;
			} else {
				stringBuilder.append(count);
				stringBuilder.append(prev);
				count = 1;
			}
			prev = now;
		}
		if (count != 0) {
			stringBuilder.append(count);
			stringBuilder.append(now);
		}
		return stringBuilder.toString();
	}
}