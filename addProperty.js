function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype = {
    constructor: Dog,
    numLegs: 4,
    eat: function() {
      console.log("bark bark");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };