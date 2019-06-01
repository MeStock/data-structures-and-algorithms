'use strict';

const Node = require('../linked-list/node.js');

class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
  }

  enqueue(entry){
    if(!entry) return 'enqueue requires an input';
    let newEntry = new Node();
    newEntry.value = entry;
    if(!this.front){
      this.front = newEntry;
      this.rear = newEntry;
      return this;
    }
    this.rear.next = newEntry;
    this.rear = newEntry;
  }

  dequeue(){
    let result = this.front;
    this.front = this.front.next;
    return result.value;
  }

  peek(){
    return this.front.value;
  }
}

module.exports = Queue;
