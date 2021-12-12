/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    var i = 0, j = 0;
    while (i < m || j < n) {
        var first = nums1[i + j];
        var second = nums2[j];
        if(i==m || first>second){
            nums1.splice(i+j,0,second)
            j++;
        }else if(j==n || first<=second){
            nums1.splice(i+j,1,first)
            i++;
        }
    }
    nums1.splice(i+j)
};
