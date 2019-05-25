'use strict';

const Queue = require('../code-challenges/stacksandqueues/queue.js');

describe('Queues', () => {
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
