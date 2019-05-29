'use strict';

const Queue = require('../stacksandqueues/queue.js');

class AnimalShelter{
  constructor(){
    this.catQ = new Queue();
    this.dogQ = new Queue();
  }

  enqueue(animal){
    if(animal.toLowerCase() === 'cat'){
      this.catQ.enqueue(animal);
      return this.catQ.rear;
    }else if(animal.toLowerCase() === 'dog'){
      this.dogQ.enqueue(animal);
      return this.dogQ.rear;
    }else{
      return 'Not a valid species';
    }
  }

  dequeue(pref){
    if(pref.toLowerCase() === 'cat'){
      if(this.catQ.front === null) return 'No cats in queue';
      return this.catQ.dequeue();
    }else if(pref.toLowerCase() === 'dog'){
      if(this.dogQ.front === null) return 'No dogs in queue';
      return this.dogQ.dequeue();
    }else{
      return 'Not a valid species';
    }
  }
}


module.exports = AnimalShelter;
