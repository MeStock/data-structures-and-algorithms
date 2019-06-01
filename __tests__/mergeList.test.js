'use strict';

const LinkedList = require('../code-challenges/linked-list/insert-include-print.js');
const mergeList = require('../code-challenges/linked-list/mergeList.js');

describe('mergeList', () => {
  it('should zip up two link list', () => {
    const LL1 = new LinkedList();
    LL1.insert('1');
    LL1.insert('2');
    LL1.insert('3');
  
    const LL2 = new LinkedList();
    LL2.insert('A');
    LL2.insert('B');
    LL2.insert('C');
    const test = mergeList(LL1,LL2);
    expect(test.next.value).toEqual('A');
    expect(test.next.next.value).toEqual('2');
    expect(test.next.next.next.value).toEqual('B');
  });
  it('should throw an error if the input is invalide', () => {
    const LL1 = new LinkedList();
    LL1.insert('1');
    LL1.insert('2');
    LL1.insert('3');
  
    const LL2 = new LinkedList();
    LL2.insert('A');
    LL2.insert('B');
    LL2.insert('C');
    const test = mergeList(1,LL2);
    expect(test).toEqual('Invalid input, please enter two linked list');
  });
});
