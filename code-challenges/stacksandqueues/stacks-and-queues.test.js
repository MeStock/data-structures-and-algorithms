'use strict';

class Node{
  constructor(){
    this.value = null;
    this.next = null;
  }
}

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


describe('Stacks and Queues', () => {
  describe('Stacks', () => {
    it('should successfully push onto a stack', () => {
      const test = new Stack();
      test.push('A');
      expect(test.top.value).toEqual('A');
    });
    it('should successfully push multiply nodes onto a stack', () => {
      const test = new Stack();
      test.push('A');
      test.push('B');
      test.push('C');
      expect(test.top.value).toEqual('C');
    });
    it('should successfully pop a node off the stack and return its value', () => {
      const test = new Stack();
      test.push('A');
      test.push('B');
      test.pop();
      expect(test.top.value).toEqual('A');
    });
    it('should empty a stack after multiple pops', () => {
      const test = new Stack();
      test.push('A');
      test.push('B');
      test.pop();
      test.pop();
      expect(test.top).toBeNull();
    });
    it('should successfully peek at the next item on the stack', () => {
      const test = new Stack();
      test.push('A');
      test.push('B');
      test.push('C');
      expect(test.peek()).toEqual('C');
    });
  });

  describe('Queues', () => {
    it('should successfully enqueue an item into a queue', () => {
      const test = new Queue();
      test.enqueue('A');
      test.enqueue('B');
      expect(test.front.value).toEqual('A');
      expect(test.rear.value).toEqual('B');
    });
    it('should successfully enqueueu multiple items into a queue', () => {
      const test = new Queue();
      test.enqueue('A');
      test.enqueue('B');
      test.enqueue('C');
      test.enqueue('D');
      expect(test.front.value).toEqual('A');
      expect(test.rear.value).toEqual('D');
    });
    it('should successfully dequeue off of a queue the expected value', () => {
      const test = new Queue();
      test.enqueue('A');
      test.enqueue('B');
      test.enqueue('C');
      test.enqueue('D');
      test.dequeue();
      expect(test.front.value).toEqual('B');
    });
    it('should successfully empty a queue after multiple dequeues', () => {
      const test = new Queue();
      test.enqueue('A');
      test.enqueue('B');
      test.dequeue();
      test.dequeue();
      expect(test.front).toBeNull();
    });
    it('should successfully peek at the next item in the queue', () => {
      const test =  new Queue();
      test.enqueue('A');
      test.enqueue('B');
      test.enqueue('C');
      expect(test.peek()).toEqual('A');
    });
  });
});
