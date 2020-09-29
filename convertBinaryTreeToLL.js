//input:Convert binary search tree into ordered linked list
/**
input:
   5 <- root
  / \
 2   8
/ \ / \
1 4 6 9

output:
head -> 1-2-4-5-6-8-9

 */
class BSTnode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class ListNode {
    constructor(value = 0, next) {
        this.value = value;
        this.next = next == undefined ? null : next
    }
}

let inputHead = new BSTnode(5)
inputHead.left = new BSTnode(2, new BSTnode(1), new BSTnode(4))
inputHead.right = new BSTnode(8, new BSTnode(6), new BSTnode(9))

function convertToLL(root) {
    let dummy = new ListNode()
    let head = dummy
    let dfs = (node) => {
        if (node.left) {
            dfs(node.left)
        }
        dummy.next = new ListNode(node.val);
        dummy = dummy.next;
        if (node.right) {
            dfs(node.right)
        }
        return dummy
    }
    dfs(root)
    console.log(head.next)
    return head.next
}

convertToLL(inputHead)