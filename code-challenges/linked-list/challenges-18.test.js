
/*

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.

Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

This object should be aware of a default empty value assigned to head when the linked list is instantiated.

- Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
- Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Define a method called print which takes in no arguments and returns a collection all of the current Node values in the Linked List.
At no time should an exception or stack trace be shown to the end user. Catch and handle any such exceptions and return a printed value or operation which cleanly represents the state and either stops execution cleanly, or provides the user with clear direction and output.
- Be sure to follow your language/frameworks standard naming conventions (e.g. C# uses PascalCasing for all method and class names).

*/

// const NodeModule = require('node.js');

class Node {
  constructor(){
    this.head = null;
    this.tail = null;
  }

  insert(value){
    if(!this.head){
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head;
      return this;
    }

    let current = this.tail;

    current.next = {
      value: value,
      next: null
    };

    this.tail = current.next;
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
}

const stockFamily = new Node;
stockFamily.insert('melissa');
stockFamily.insert('kevin');
stockFamily.insert('kiwi');
stockFamily.insert('wallace');
stockFamily.include('wallace');
stockFamily.include('');
stockFamily.print();

console.log(stockFamily);

describe('Linked list', () => {
  it('shound successfully build an empty linked list', () => {
    expect(new Node()).toBeInstanceOf(Node);
  });
  it('can properly insert into the linked list', () => {
    const test = new Node;
    expect(test.insert('test')).toEqual(expect.objectContaining(test));
  });
  it('head should point to the first node in the list', () => {
    const test = new Node;
    test.insert('head');
    test.insert('first node');
    console.log(test.next);
    expect(test.head.next.value).toBe('first node');
  });
  it('should properly insert multiple nodes into the list', () => {
    const test = new Node;
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.head.next.next.next.value).toBe('third node');
  });
  it('should return true when it finds a searched value within the list', () => {
    const test = new Node;
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.include('third node')).toBeTruthy();
    expect(test.include('first node')).toBeTruthy();
    expect(test.include('forth node')).toBeFalsy();
  });
  it('should return false when it does not find a searched value within the list', () => {
    const test = new Node;
    test.insert('head');
    test.insert('first node');
    expect(test.include('forth node')).toBeFalsy();
  });
  it('can print out a list of values within the lsit', () => {
    const test = new Node;
    test.insert('head');
    test.insert('first node');
    test.insert('second node');
    test.insert('third node');
    expect(test.print()).toEqual('head first node second node third node');
  });
});

