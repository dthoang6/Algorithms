const obj = {
  name: "Tom",
  age: 33,
  hi: function () {
    console.log(`hi, ${this.name} is ${this.age} years old.`)
  }
}

//console.log(obj)
console.log(obj.hi())
