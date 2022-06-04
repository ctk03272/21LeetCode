class Solution {
	public boolean isValidSudoku(char[][] board) {
		int len = board.length;
		for (int i = 0; i < len; i++) {
			if (!isValidLine(board[i])) {
				return false;
			}
		}

		for (int i = 0; i < len; i++) {
			char[] temp = new char[len];
			for (int j = 0; j < len; j++) {
				temp[j] = board[j][i];
			}
			if (!isValidLine(temp)) {
				return false;
			}
		}

		int count = 0;
		char[] temp = new char[len];
		for (int i = 0; i < len; i = i + 3) {
			for (int j = 0; j < len ; j = j + 3) {
				if(!isValidSquare(board,j,i,3)){
					return false;
				}
			}
		}
		return true;
	}

	public boolean isValidLine(char[] board) {
		HashMap<Character, Boolean> characterBooleanHashMap = new HashMap<>();
		for (char character : board) {
			if (character != '.') {
				if (characterBooleanHashMap.containsKey(character) && characterBooleanHashMap.get(character)) {
					return false;
				} else {
					characterBooleanHashMap.put(character, true);
				}
			}
		}
		return true;
	}

	public boolean isValidSquare(char[][] board, int startX, int startY, int len) {
		HashMap<Character, Boolean> characterBooleanHashMap = new HashMap<>();
		for (int i = 0; i < len; i++) {
			for (int j = 0; j < len; j++) {
				char character = board[startY + i][startX + j];
				if (character != '.') {
					if (characterBooleanHashMap.containsKey(character) && characterBooleanHashMap.get(character)) {
						return false;
					} else {
						characterBooleanHashMap.put(character, true);
					}
				}
			}
		}
		return true;
	}
}