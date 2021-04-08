//create a Module with immediately invoked function expression (IIFE)
let funModule = (function() {
    return {
      isCuteMixin: function(obj) {
        obj.isCute = function() {
          return true;
        };
      },
      singMixin: function() {
        obj.sing = function() {
          console.log("Singing to an awesome tune");
        };
      }
    }
  }) ();