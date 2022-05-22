import java.util.ArrayList;
import java.util.List;
import java.util.Stack;


class Solution {
	List<List<String>> answer;

	public List<List<String>> partition(String s) {
		answer = new ArrayList<>();
		getAnswer(new Stack<>(), s);
		return answer;
	}

	private void getAnswer(Stack<String> stack, String s) {
		if (s.length() == 0) {
			answer.add(new ArrayList<>(stack));
			return;
		}
		int length = s.length();
		for (int i = 0; i < length; i++) {
			if (isPalindrome(s, 0, i)) {
				stack.push(s.substring(0, i + 1));
				getAnswer(stack, s.substring(i + 1));
				stack.pop();
			}
		}

	}

	private boolean isPalindrome(String s, int start, int end) {
		while (start < end) {
			if (s.charAt(start) != s.charAt(end)) {
				return false;
			}
			start++;
			end--;
		}
		return true;
	}
}