
var MyQueue = function() {
  this.front = []
  this.back = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  
  this.front.push(x)
  
  return this
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  	while(this.front.length !== 0){
		this.back.push(this.front.pop())
	}

	var pop = this.back.pop()

	while(this.back.length !== 0){
		this.front.push(this.back.pop())
	}

	return pop
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  console.log('TF:', this.front[0])
    return this.front[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.front.length === 0 && this.front.length === 0){
      return true
    }
  return false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */