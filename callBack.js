//study callback function
//call back function
const message = function() {
    console.log("This message is shown after 3 seconds.");
}

setTimeout(message, 3000);

//callback function as anonymous function: function definition without name

setTimeout( function() {
    console.log("This message is shown after 5 seconds with anonymous function as callback function");
}, 5000);

//callback function as an arrow function

setTimeout( () => {
    console.log("This message is shown after 10 seconds with arrow function");
}, 10000);