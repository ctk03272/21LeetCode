import java.util.HashMap;
import java.util.Map;


class Solution {
    public String minWindow(String s, String t) {
			int start = 0, end = 0, length = s.length();
		int answer = Integer.MAX_VALUE;
		int answerStart = 0;
		int answerEnd = 0;
		int tCount = t.length();
		Map<Character, Integer> freqTMap = new HashMap<>();
		for (int i = 0; i < t.length(); i++) {
			Character now = t.charAt(i);
			if (freqTMap.containsKey(now)) {
				int cnt = freqTMap.get(now);
				freqTMap.put(now, ++cnt);
			} else {
				freqTMap.put(now, 1);
			}
		}

		while (start < length) {
			Character now = s.charAt(start);
			if (freqTMap.containsKey(now) && freqTMap.get(now) > 0) {
				tCount--;
			}
			if (freqTMap.containsKey(now)) {
				freqTMap.put(now, freqTMap.get(now) - 1);
			} else {
				freqTMap.put(now, -1);
			}

			while (tCount == 0) {
				if ((start - end + 1) < answer) {
					answer = start - end + 1;
					answerEnd = end;
				}
				Character now2 = s.charAt(end);
				freqTMap.put(now2, freqTMap.get(now2) + 1);
				if (freqTMap.get(now2) > 0) {
					tCount++;
				}
				end++;
			}
			start++;

		}
		return answerEnd + answer > length ? "" : s.substring(answerEnd, answerEnd + answer);      
    }
}