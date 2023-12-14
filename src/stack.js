const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor(){
    this.res = []
  }
  push(element) {
    this.res.push(element)
    return this.res
  }

  pop() {
    let a = this.res[this.res.length-1]
    this.res.pop()
    return a
  }

  peek() {
    console.log(this.res[this.res.length-1])
    return this.res[this.res.length-1]
  }
}

module.exports = {
  Stack
};
