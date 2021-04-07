//a flyMixin takes any object and gives it a fly method.
let flyMixin = function(obj) {
    obj.fly = function() {
        console.log("Flying, woooh");
    }
}
//the flyMixin takes any object and gives it the fly method
let bird = {
    name: "Donald",
    numLegs: 2
  };
  
  let plane = {
    model: "777",
    numPassengers: 524
  };
  //bird and plan are passed into flyMixin, which then assigns the fly function to each object.
  flyMixin(bird);
  flyMixin(plane);

  //Now, we can call fly function
  bird.fly();
  plane.fly();