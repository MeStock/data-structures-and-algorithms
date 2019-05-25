'use strict';

const Node = require('../code-challenges/linked-list/node.js');
const LinkedList = require('../code-challenges/linked-list/insert-include-print.js');

describe('Linked list', () => {
  it('shound successfully build an empty linked list', () => {
    expect(new LinkedList()).toBeInstanceOf(LinkedList);
  });
  it('can properly insert into the linked list', () => {
    const test = new LinkedList();
    expect(test.insert('test')).toEqual(expect.objectContaining(test));
  });
  it('head should point to the first node in the list', () => {
    const test = new LinkedList();
    test.insert('head');
    test.insert('first node');
    console.log(test.next);
    expect(test.head.next.value).toBe('first node');
  });
  it('should properly insert multiple nodes into the list', () => {
    const test = new LinkedList();
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.head.next.next.next.value).toBe('third node');
  });
  it('should return true when it finds a searched value within the list', () => {
    const test = new LinkedList();
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.include('third node')).toBeTruthy();
    expect(test.include('first node')).toBeTruthy();
    expect(test.include('forth node')).toBeFalsy();
  });
  it('should return false when it does not find a searched value within the list', () => {
    const test = new LinkedList();
    test.insert('head');
    test.insert('first node');
    expect(test.include('forth node')).toBeFalsy();
  });
  it('can print out a list of values within the lsit', () => {
    const test = new LinkedList();
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.print()).toEqual('head first node second node third node');
  });
});

