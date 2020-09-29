//Copy List with Random Pointer
/*A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.
Return a deep copy of the list.
The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:
val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
https://leetcode.com/problems/copy-list-with-random-pointer/
*/

//iterative  time 0(n) space O(n)
var copyRandomList = function (head) {
    if (!head) return null
    let visitedMap = new Map();
    let oldNode = head;
    let newNode = new Node(head.val, null, null);
    visitedMap.set(oldNode, newNode)
    while (oldNode !== null) {
        newNode.next = getClonedNode(oldNode.next, visitedMap)
        newNode.random = getClonedNode(oldNode.random, visitedMap)

        oldNode = oldNode.next;
        newNode = newNode.next;
    }
    return visitedMap.get(head)
};

var getClonedNode = function (node, visitedMap) {
    if (node !== null) {
        let clonedNode = visitedMap.get(node);
        if (!clonedNode) {
            let newNode = new Node(node.val, null, null)
            visitedMap.set(node, newNode)
            return newNode
        } else {
            return clonedNode
        }
    }
    return null
}

//recursive time 0(n) space O(n)
var copyRandomList1 = function (head, visited = new Map()) {
    if (head == null) return null;

    if (visited.get(head)) {
        return visited.get(head)
    }
    let node = new Node(head.val, null, null)
    visited.set(head, node)

    node.next = copyRandomList(head.next, visited);
    node.random = copyRandomList(head.random, visited);

    return node;
}


//using time O(n) O(1)
var copyRandomList2 = function (head) {
    if (head == null) return null;
    let ptr = head;
    while (ptr !== null) {
        let node = new Node(ptr.val, null, null)

        node.next = ptr.next;
        ptr.next = node;
        ptr = node.next;
    }
    ptr = head;
    while (ptr !== null) {
        ptr.next.random = (ptr.random !== null) ? ptr.random.next : null;
        ptr = ptr.next.next;
    }
    let oldNode = head;
    let newNode = head.next;
    let resultNode = head.next
    while (oldNode !== null) {
        oldNode.next = oldNode.next.next;
        newNode.next = newNode.next !== null ? newNode.next.next : null

        oldNode = oldNode.next;
        newNode = newNode.next
    }
    return resultNode;
}