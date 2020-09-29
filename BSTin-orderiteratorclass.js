class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(root) {
        this.values = [];
        this.dfs = this.dfs(root, this.values);
        this.pointer = 0;
    }

    dfs(root, values) {
        if (root.left) {
            this.dfs(root.left, values)
        }
        values.push(root.value)

        if (root.right) {
            this.dfs(root.right, values)
        }
    }

    next() {
        if (this.pointer >= this.values.length - 1) {
            throw new Error('End of tree')
        }
        this.pointer += 1;
    }

    print() {
        console.log(this.values[this.pointer])
    }
}

let a = new Node(1)
a.left = new Node(2)
a.right = new Node(3)
a.left.left = new Node(4)
a.left.right = new Node(5)

let iterator = new BST(a)

iterator.print();
iterator.next();
iterator.print();
iterator.next();
iterator.print()
iterator.next();
iterator.print()
iterator.next();
iterator.print()
iterator.next();
iterator.print()


