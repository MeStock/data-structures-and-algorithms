'use strict';

class Node{
  constructor(){
    this.head = null;
  }

  append(value){
    if(!this.head){
      this.head = {
        value: value,
        next: null
      };
      return this;
    }
    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }

    current.next = {
      value: value,
      next: null
    };
  }

  insertBefore(value, newValue){
    let current = this.head;
    if(current.value === value){
      current = {
        value: newValue,
        next: current.next
      };
      return this;
    }
    while(current.next && current.next.value !== value){
      current = current.next;
      if(current.next === null){
        return 'exception';
      }
    }
    if(current.value === value){
      current = {
        value: newValue,
        next: current.next
      };
      return this;
    }

  }

  insertAfter(value, newValue){
    let current = this.head;
    while(current.value !== value){
      current = current.next;
      if(current.next === null){
        return 'exception';
      }
    }
    current.next = {
      value: newValue,
      next: current.next
    };

    return this;
  }

}

let stockFamily = new Node;
stockFamily.append('melissa');
stockFamily.append('wallace');
stockFamily.insertAfter('melissa','kevin');
stockFamily.insertBefore('kevin', 'testing');


console.log(stockFamily);


describe('Linked list', () => {
  it('shound successfully build an empty linked list', () => {
    expect(new Node()).toBeInstanceOf(Node);
  });
  it('can properly add a node to the list', () => {
    const test = new Node;
    expect(test.append('test')).toEqual(expect.objectContaining(test));
  });
  xit('should properly insert before the first node of the list', () => {
    const test = new Node;
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertBefore('head','inserted before node');
    expect(test.value).toBe('inserted before node');
  });
  xit('should properly insert before i in the middle of the list', () => {
    const test = new Node;
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertBefore('first node','inserted node');
    expect(test.next.value).toEqual('inserted node');
  });
  xit('should properly insert after the last node of the list', () => {
    const test = new Node;
    test.append('head');
    test.append('first node');
    test.insertAfter('first node', 'inserted node');
    expect(test.next.next.value).toEqual('inserted node');
  });
  xit('should properly insert in the middle of the list', () => {
    const test = new Node;
    test.append('head');
    test.append('first node');
    test.append('second node');
    test.insertAfter('first node', 'inserted node');
    expect(test.next.next.value).toEqual('inserted node');
  });
});