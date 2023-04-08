function reverseString(str) {
  //check input string
  if (!str || typeof str != "string") {
    return "Not a string"
  }
  if (str.length === 1) {
    return str
  }
  return str.split("").reverse().join("")
}

console.log(reverseString("Hello world"))
console.log(reverseString("1"))
console.log(reverseString(1))
