/**
 * Example:
 * var li = ListNode(5)
 * var v = li.`val`
 * Definition for singly-linked list.
 * class ListNode(var `val`: Int) {
 *     var next: ListNode? = null
 * }
 */
class Solution {
    fun deleteDuplicates(head: ListNode?): ListNode? {
        val number = mutableSetOf<Int>();
        val answer = head
        var now = head
        var prev: ListNode? = null
        while (now != null) {
            if (number.contains(now.`val`)) {
                prev?.next = now.next
            } else {
                number.add(now.`val`)
                prev=now
            }
            now = now.next
        }
        return answer
    }
}
