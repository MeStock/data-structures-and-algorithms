'use strict';

const Node = require('../linked-list/node.js');

class Stack{
  constructor(){
    this.top = null;
  }

  push(entry){
    if(!entry) return 'push requires an input';
    let newEntry = new Node();
    newEntry.value = entry;
    newEntry.next = this.top;
    this.top = newEntry;
  }

  pop(){
    let result = this.top;
    this.top = this.top.next;
    return result.value;
  }

  peek(){
    return this.top.value;
  }
}


module.exports = Stack;
