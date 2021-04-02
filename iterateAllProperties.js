function Dog(name) {
    this.name = name;//own properties
  }
  
  Dog.prototype.numLegs = 4;//prototype properties
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  for (let property in beagle) {
    if(beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }