class HashTable {
  constructor(s) {
    this.table = new Array(s)
    this.size = 0
  }
  _hash(key) {
    let hash = 0
    for (let i = 0; i < this.table.length; i++) {
      hash += key.charCodeAt(i)
    }
    return hash % this.table.length
  }

  set(key, value) {
    let index = this._hash(key)
    if (this.table[index]) {
    } else {
      this.table[index] = []
      this.table[index].push([key, value])
    }
  }

  get(key) {}
}

let myHT = new HashTable(2)
console.log(myHT)
