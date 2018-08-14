const myFood = {
      egg: “plant”,
      func: function() {
            var self = this;
            console.log(“outer func: this.egg = “ + this.egg);
            console.log(“outer func: self.egg = “ + self.egg);
           (function() {
            console.log(“inner func: this.egg = “ + this.egg);
            console.log(“inner func: self.egg = “ + self.egg);
            }());
       },
       es6Func: () =>{
             let self = this;
             console.log("es6 outer func: this.egg = " + this.egg);
             console.log("es6 outer func: self.egg = " + self.egg);
            (() => {
             console.log("es6 inner func: this.egg = " + this.egg);
             console.log("es6 inner func: self.egg = " + self.egg);
             }());
        }
};
myFood.func();
