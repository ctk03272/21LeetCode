class Solution {
	char zero = '0';

	public String multiply(String num1, String num2) {
		if (num1.charAt(0) - zero == 0 || num2.charAt(0) - zero == 0) {
			return "0";
		}
		char[][] chars = new char[num2.length()][num1.length() + num2.length()];
		for (int i = 0; i < chars.length; i++) {
			Arrays.fill(chars[i], zero);
		}
		for (int i = 0; i < num2.length(); i++) {
			char[] temp = multiply(num1, num2.charAt(num2.length()-1-i) - zero, i);
			for (int j = 0; j < temp.length; j++) {
				chars[i][j] = temp[j];
			}
		}
		char[] ans = new char[num1.length() + num2.length()];
		Arrays.fill(ans, zero);
		int plus = 0;
		for (int i = 0; i < num1.length() + num2.length(); i++) {
			int sum = plus;
			for (int j = 0; j < num2.length(); j++) {
				// ans[num1.length() + num2.length() - 1 - i] += chars[j][i] - zero;
				sum += chars[j][i] - zero;
			}
			int i1 = num1.length() + num2.length() - 1 - i;
			if (sum >= 10) {
				plus = sum / 10;
				ans[i1] = (char)(sum % 10 + zero);
			} else {
				plus = 0;
				ans[i1] = (char)(sum + zero);
			}
		}
		return ans[0]!=zero?new String(ans):new String(ans).substring(1,num1.length()+num2.length());
	}

	public char[] multiply(String target, int multiply, int offset) {
		int len = target.length();
		char[] chars = new char[len + 1 + offset];
		Arrays.fill(chars, zero);
		int plus = 0;
		for (int i = 0; i < len; i++) {
			String temp = String.valueOf(multiply * (target.charAt(len - 1 - i) - zero) + plus);
			if (temp.length() == 2) {
				plus = temp.charAt(0) - zero;
				chars[offset + i] = temp.charAt(1);
			} else if (temp.length() == 1) {
				plus = 0;
				chars[offset + i] = temp.charAt(0);
			}

		}
		chars[offset + len] = (char)(plus + zero);
		return chars;
	}
}