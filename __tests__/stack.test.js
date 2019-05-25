'use strict';

const Stack = require('../code-challenges/stacksandqueues/stack.js');

describe('Stacks', () => {
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
});
