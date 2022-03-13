/* time limit exceed */
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.map = {};
    let head = new Node();
    let tail = new Node();
    this.size = 0;
    this.capacity = capacity;
    let con = function (a, b, c = null) {
        a.next = b;
        b.prev = a;
        if (c) {
            c.prev = b;
            b.next = c;
        }
    };
    con(head, tail);
    this.moveToFirst = function (node) {
        if (node.next) {
            con(node.prev, node.next)
        }
        con(head, node, head.next);
    };
    this.removeLast = function () {
        let last = tail.prev;
        con(last.prev, tail);
        delete this.map[last.key];
    }
};

var Node = function (key = 0, val = 0) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
}
/** \
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    if (this.map[key]) {
        this.moveToFirst(this.map[key]);
        return this.map[key].val;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    if (this.map[key]) {
        this.moveToFirst(this.map[key]);
        this.map[key].val = value;
    } else {
        let insert = new Node(key, value);
        this.moveToFirst(insert);
        this.map[key] = insert;
        if (this.size === this.capacity) {
            this.removeLast();
        } else {
            this.size++;
        }
    }
};

