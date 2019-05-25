'use strict';

/* 

Write a method for the Linked List class which takes a number, k, as a parameter. Return the node’s value that is k from the end of the linked list. You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

*/

class LinkedList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = null;
  }

  insert(value){
    if(!this.head){
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      this.length = 1;
      return this;
    }

    let current = this.tail;

    current.next = {
      value: value,
      next: null,
    };

    this.tail = current.next;
    this.length++;
    return this;
  }


  nodeFromEnd(k){
    if(typeof k !== 'number') return 'Please choose a number';
    if(k > this.length) return 'Value selected exceeds link list length';
    if(k < 0) return 'Negative numbers are not valid';
    if(k === 0) return this.tail.value;
    let current = this.head;
    let idx = this.length - k - 1;
    for(let i = 0; i < idx; i++){
      current = current.next;
    }
    return current.value;
  }
}

// const stockFamily = new LinkedList;
// stockFamily.insert('melissa');
// stockFamily.insert('kevin');
// stockFamily.insert('kiwi');
// stockFamily.insert('wallace');
// stockFamily.nodeFromEnd(2);

// console.log(stockFamily);

module.exports = LinkedList;



