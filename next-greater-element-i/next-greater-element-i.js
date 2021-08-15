var nextGreaterElement = function (nums1, nums2) {
    class Stack {
        constructor() {
            this._arr = [];
        }

        push(item) {
            this._arr.push(item);
        }

        pop() {
            return this._arr.pop();
        }

        peek() {
            return this._arr[this._arr.length - 1];
        }

        isEmpty() {
            return this._arr.length == 0 ? true : false;
        }
    }
    let nextGreat = new Array(nums2.length)
    nextGreat.fill(-1,0)
    let st = new Stack();
    for (let i = 0; i < nums2.length; i++) {
        while (!st.isEmpty()) {
            if (nums2[st.peek()] < nums2[i]) {
                nextGreat[st.pop()] = i;
            } else {
                st.push(i);
                break;
            }
        }
        if (st.isEmpty()) {
            st.push(i);
        }
    }
    return nums1.map(a=>nums2.indexOf(a)).map(a=>nextGreat[a]==-1?-1:nums2[nextGreat[a]]);
};