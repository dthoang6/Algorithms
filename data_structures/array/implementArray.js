/* 
  - a js class is not an object, it is a template for js objects
  - when you have a class, you can use the class to create the objects.
  - the constructor method is called automatically when a new object is created
  -
  - the constructor method is a special method, it has the exact name constructor and the class use the constructor to initialize object properties
  - class methods are created with the same syntax as object methods
  - use the keyword class to create a class, always add a constructor() method, then add any number of methods; method_1() {...}

  - to create a class inheritance, use the extends keyword
  - a class created with a class inheritance inherits all the methods from another class
  - the super() method refers to the parent class.
  - by calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parents properties and methods.
  - inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

  - to add getters and setters in the class, use the get and set keywords: if you want to do something special with the value before returning them, or before you set them.
  - even if the getter is the a method, you do not use parentheses when you want to get the property value

  - class declaration is not hoisted, you must declare a class before you can use it.
*/

class Car {
  constructor(brand) {
    this.carname = brand
  }
  get carName() {
    return this.carname
  }
  set carName(x) {
    this.carName = x
  }
  present() {
    return "I have a " + this.carname
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand)
    this.model = mod
  }
  show() {
    return this.present() + ", it is a " + this.model
  }
}

const myCar = new Model("Ford", "Mustang")
console.log(myCar.show())
