function Cat(name) {
    this.name = name;
  }
  
  Cat.prototype = {
    constructor: Cat
  };
  
  function Bear(name) {
    this.name = name;
  }
  
  Bear.prototype = {
    constructor: Bear
  };
  
  function Animal() { }
  
  Animal.prototype = {
    constructor: Animal,
    eat: function() {
      console.log("nom nom nom");
    }
  };

  //make an instance of the supertype
  let animal = Object.create(Animal.prototype);
  animal.eat();

  //set the prototype of the child to an instance of parent to use inheritance methods.
  Cat.prototype = Object.create(Animal.prototype);
  Bear.prototype = Object.create(Animal.prototype);

  //set Cat, and Bear Constructor's Property
  Cat.prototype.constructor = Cat;
  Bear.prototype.constructor = Bear;

  //add methods to Cat Prototype
  Cat.prototype.myName = function() {
      console.log("My name is " + this.name);
  };
