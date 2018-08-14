const myFood = {
      egg: 'plant',
      func: function() {
            let self = this;
            console.log("outer func: this.egg = " + this.egg);
            console.log("outer func: self.egg = " + self.egg);
           (function() {
            console.log("inner func: this.egg = " + this.egg);
            console.log("inner func: self.egg = " + self.egg);
            }());
       },
       es6Func: function(){
             let es6Self = this;
             console.log("es6 outer func: this.egg = " + this.egg);
             console.log("es6 outer func: es6Self.egg = " + es6Self.egg);
             debugger
             (() => {
             console.log("es6 inner func: this.egg = " + this.egg);
             console.log("es6 inner func: es6Self.egg = " + es6Self.egg);
           })();
        }
};
myFood.func();
console.log('*'.repeat(35));
myFood.es6Func();
