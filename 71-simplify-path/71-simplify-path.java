class Solution {
	public String simplifyPath(String path) {
		String[] split = path.split("/");
		Stack<String> stringStack = new Stack<>();

		for (int i = 0; i < split.length; i++) {
			String now = split[i];
			if(now==null || now.length()==0){
				continue;
			}else {
				if(now.equals(".")){
					continue;
				}else if(now.equals("..")){
					if(!stringStack.isEmpty()){
						stringStack.pop();
					}
				}else {
					stringStack.push(now);
				}
			}
		}
		String ans="";
		// for (int i = 0; i < stringStack.size(); i++) {
		// 	ans=ans+"/"+stringStack.get(i);
		// }
		while (!stringStack.isEmpty()){
			ans="/"+stringStack.pop()+ans;
		}
		return ans.length()==0?"/":ans;
	}
}