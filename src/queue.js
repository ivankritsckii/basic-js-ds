const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor(){
    this.list=[]
    this.obj = {}
  }

  getUnderlyingList() {
    console.log(this.list.length-1, this.list)
    for(let i = this.list.length-1; i>=0; i--){
        let newObj = {}
      if(i == this.list.length-1){
        newObj.value = this.list[i];
        newObj.next = null;
        this.obj = newObj
      } else {
        newObj.value = this.list[i];
        newObj.next = this.obj;
        this.obj = newObj
      }
      
    }
    return this.obj
  }

  enqueue(value) {
    this.list.push(value)
    return this.list
  }

  dequeue() {
    let a = this.list[0];
    this.list.shift()
    return a
  }
}

module.exports = {
  Queue
};
