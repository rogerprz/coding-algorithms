
var Logger = function() {
    this.map = new Map();
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (this.map.has(message)){
        const previousTime = this.map.get(message) +10
        if (previousTime > timestamp) {
            return false
        }
    } 
    this.map.set(message, timestamp)
    return true
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */