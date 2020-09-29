//https://leetcode.com/problems/min-stack/

function last(arr) {
    return arr[arr.length - 1];
}

MinStack.prototype.push = function (x) {
    this.stack.push(x);

    if (this.minStack.length === 0 || x < last(this.minStack)[0]) {
        this.minStack.push([x, 1])
    }

    else if (x === last(this.minStack)[0]) {
        last(this.minStack)[1]++;
    }
};

MinStack.prototype.pop = function () {
    if (last(this.stack) === last(this.minStack)[0]) {
        last(this.minStack)[1]--;
    }

    if (last(this.minStack)[1] === 0) {
        this.minStack.pop()
    }
    this.stack.pop();
}; n

MinStack.prototype.top = function () {
    return last(this.stack);
};

MinStack.prototype.getMin = function () {
    return last(this.minStack)[0]
};