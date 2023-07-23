const MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);

  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= val) {
    this.minStack.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return;

  const num = this.stack.pop();
  if (num === this.minStack[this.minStack.length - 1]) {
    this.minStack.pop();
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1];
  }
  return null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.minStack.length > 0) {
    return this.minStack[this.minStack.length - 1];
  }

  return null;
};

/**
 * Your MinStack object will be instantiated and called as such:
 */
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.pop();
minStack.top();
minStack.getMin();
