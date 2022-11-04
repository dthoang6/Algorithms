const name = "john snow";

const obj = {
  [name]: "hello",
  [1 + 2]: "hihi"
};

//function to reverse a string

function reverse(str) {
  let character = str.split("");
  return character.reverse().join('');
}

let x = "Hello world";
console.log(reverse(x));
