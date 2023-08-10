/* when you want to use an array
- array is a collection of items stored at contiguous memory locations
- each item can be accessed through its index number, 0 based indexed
- array is good with sorting
- string problem is array problem: we can convert string to an array
    - string is simply an array of character
    - when you get a question like reverse a string, what you should do is convert string to array of character by: doing some loop on it or using split method in JS and returning it as a string
- pros: fast lookups, fast push and pop, ordered
- cons: slow inserts, slow deletes, fixed size for static array
*/

class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item
    this.length++
    return this.length
  }

  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    return lastItem
  }

  delete(index) {
    const item = this.data[index]
    this.shiftItems(index)
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1] //shift item to the left
    }
    delete this.data[this.length - 1]
    this.length--
  }
}

const newArray = new MyArray()

newArray.push(1)

newArray.push(2)

console.log(newArray)
