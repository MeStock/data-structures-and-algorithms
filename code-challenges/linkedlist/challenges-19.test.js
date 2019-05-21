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
