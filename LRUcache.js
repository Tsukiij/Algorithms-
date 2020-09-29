/*Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.
get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 capacity  )

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4 */

function Node(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null
    this.next = null
}
var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.head = null;
    this.tail = null;
    this.length = 0
    this.hashMap = {}
};

LRUCache.prototype.add = function (node) {
    if (!this.head && !this.tail) {
        node.prev = null;
        node.next = null;
        this.head = node;
        this.tail = node;
    } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
        this.tail.next = null;
    }
    this.hashMap[node.key] = node;
};

LRUCache.prototype.remove = function (node) {
    if (this.length <= 1) {
        this.head = null;
        this.tail = null
    } else {
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.head) this.head = this.head.next
        if (node === this.tail) this.tail = this.tail.prev
    }
    delete this.hashMap[node.key]
}

LRUCache.prototype.moveToTail = function (node) {
    this.remove(node);
    this.add(node);
}

LRUCache.prototype.get = function (key) {
    let node = this.hashMap[key]
    if (!node) return -1;
    this.moveToTail(node)
    return node.val;
};

LRUCache.prototype.put = function (key, value) {
    let temp = new Node(key, value);
    if (this.hashMap[key] === undefined) {
        if (this.capacity === this.length) {
            this.remove(this.head)
            this.length--
        }
        this.length++;
    } else {
        this.remove(this.hashMap[key])
    }
    this.add(temp);
};