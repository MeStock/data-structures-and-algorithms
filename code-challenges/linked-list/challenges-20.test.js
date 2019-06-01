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

  include(value){
    let current = this.head;
    while(current.next !== null){
      if(current.value === value){
        return true;
      }
      current = current.next;
    }
    if(current.value === value) return true;
    return false;
  }

  print(){
    if(!this.head) throw 'List is empty';
    let current = this.head; 
    let nodeValues = current.value;
    while(current.next !== null){
      current = current.next;
      nodeValues += ` ${current.value}`;
    }
    return nodeValues;
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

const stockFamily = new LinkedList;
stockFamily.insert('melissa');
stockFamily.insert('kevin');
stockFamily.insert('kiwi');
stockFamily.insert('wallace');
stockFamily.nodeFromEnd(2);
stockFamily.print();

// console.log(stockFamily);

describe('Linked list nodeFromEnd', () => {
  const test = new LinkedList;
  test.insert('head');
  test.insert('second node');
  test.insert('second to last node');
  test.insert('first to last node');
  test.insert('last node');
  it('where k is greater than the length of the linked list', () => {
    expect(test.nodeFromEnd(6)).toEqual('Value selected exceeds link list length');
  });
  it('where k is the same length as the linked list', () => {
    expect(test.nodeFromEnd(5)).toEqual('head');
  });
  it('where k is not a positive number', () => {
    expect(test.nodeFromEnd(-1)).toBe('Negative numbers are not valid');
  });
  it('where the linked list is the size of one', () => {
    expect(test.nodeFromEnd(1)).toEqual('first to last node');
  });
  it('should return the second to the last node', () => {
    expect(test.nodeFromEnd(2)).toEqual('second to last node');
  });
});

