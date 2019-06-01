'use strict';

const PseudoQueue = require('../code-challenges/queueWithStacks/queue-with-stacks.js');

describe('PseudoQueue', () => {
  it('should create a new queue', () => {
    const test = new PseudoQueue();
    expect(test).toBeInstanceOf(PseudoQueue);
  });
  describe('enqueue', () => {
    it('should add elements to the end of the queue', () => {
      const test = new PseudoQueue();
      test.enqueue('first in');
      test.enqueue('second in');
      test.enqueue('third in');
      expect(test.stack1.top.value).toEqual('third in');
    });
  });
  describe('dequeue', () => {
    it('should remove elements from the front of the queue, FIFO', () => {
      const test = new PseudoQueue();
      test.enqueue('first in');
      test.enqueue('second in');
      test.enqueue('third in');
      expect(test.dequeue()).toEqual('first in');
    });
    it('should stop if there is nothing to remove', () => {
      const test = new PseudoQueue();
      expect(test.dequeue()).toEqual('Nothing to dequeue');
    });
  });
});
