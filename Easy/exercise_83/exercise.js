/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let actual = head;
  while (actual !== null && actual.next !== null) {
    if (actual.val === actual.next.val) {
      actual.next = actual.next.next;
    } else {
      actual = actual.next;
    }
  }
  return head;
};

const head = [1, 1, 2], head2 = [1, 1, 2, 3, 3]
deleteDuplicates(head)