class Solution {
	public int[] asteroidCollision(int[] asteroids) {
		Stack<Integer> integerStack = new Stack<>();
		for (int i = 0; i < asteroids.length; i++) {
			int now = asteroids[i];
			if (integerStack.isEmpty()) {
				integerStack.push(now);
			} else {
				int prev = integerStack.peek();
				if (prev * now > 0) {
					integerStack.push(now);
				} else {
					boolean isSame = false;
					while (prev > 0) {
						if (integerStack.isEmpty()) {
							break;
						}
						prev = integerStack.pop();
						if (Math.abs(prev) > Math.abs(now)) {
							now = prev;
							break;
						} else if (Math.abs(prev) == Math.abs(now)) {
							isSame = true;
							break;
						}else{
							if (integerStack.isEmpty()){
								break;
							}
							prev=integerStack.peek();
						}
					}
					if (!isSame) {
						integerStack.push(now);
					}
				}
			}
		}
		return integerStack.stream().mapToInt(a -> a).toArray();
	}
}