//https://leetcode.com/explore/interview/card/bloomberg/69/linked-list/385/

import { lstat } from "fs";


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummyHead = new ListNode();
    let current = dummyHead;
    let p = l1; let q = l2;
    while (p !== null || q !== null) {
        let x = (p !== null) ? p.val : 0;
        let y = (q !== null) ? q.val : 0;
        let sum = x + y + carry;
        let digit = sum % 10;
        carry = sum >= 10 ? 1 : 0;
        current.next = new ListNode(digit);
        current = current.next;
        p = (p !== null) ? p.next : null;
        q = (q !== null) ? q.next : null;
    }
    if (carry === 1) current.next = new ListNode(carry);
    return dummyHead.next
}