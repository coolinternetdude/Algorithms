class MessageBoard {
  constructor() {
    this.messages = new Map();
    this.id = 1;
  }
  addMessage(value) {
    this.messages.set(this.id, value);
    this.id++;
    return this;
  }
  findMessageById(id) {
    return this.messages.get(id);
  }
  findMessageByValue(val) {
    for (let msg of this.messages.values()) {
      if (msg === val) return msg;
    }
  }
  removeMessage(id) {
    this.messages.delete(id);
    return this;
  }
  numberOfMessages() {
    return this.messages.size;
  }
  messagesToArray() {
    return Array.from(this.messages.values());
  }
}

// sets
function uniqueValues(arr) {
  return new Set(arr).size;
}

function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

function countPairs(arr, num) {
  var cache = new Set(arr);
  var count = 0;
  for (let val of arr) {
    cache.delete(val);
    if (cache.has(num - val)) {
      count++;
    }
  }
  return count;
}
countPairs([8, 2, 6, 4, 10, 0, 7, 3], 10); // 3
// set(6,4,10,0);
// countPairs([8,2],10) // 1
// countPairs([1,2],10) // 0
// countPairs([1,2,3,4,5],10) // 0
// countPairs([],10) // 0
// countPairs([5,4,-10,6,-20,16],-4) // 2
// countPairs([0,-4],-4) // 1
