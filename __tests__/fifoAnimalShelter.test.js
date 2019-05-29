'use strict';

const AnimalShelter = require('../code-challenges/fifo-animal-shelter/fifoAnimalShelter.js');

describe('Animal Shelter', () => {
  describe('Queues', () => {
    it('should successfully enqueue a cat or dog into the queue', () => {
      const test = new AnimalShelter();
      test.enqueue('cat');
      test.enqueue('dog');
      expect(test.catQ.front.value).toEqual('cat');
      expect(test.dogQ.front.value).toEqual('dog');
    });
    it('should successfully enqueueu multiple items into a queue', () => {
      const test = new AnimalShelter();
      test.enqueue('cat');
      test.enqueue('cat');
      test.enqueue('dog');
      test.enqueue('dog');
      expect(test.catQ.front.value).toEqual('cat');
      expect(test.catQ.rear.value).toEqual('cat');
      expect(test.dogQ.front.value).toEqual('dog');
      expect(test.dogQ.rear.value).toEqual('dog');
    });
    it('should successfully dequeue off of a queue the expected value', () => {
      const test = new AnimalShelter();
      test.enqueue('cat');
      test.enqueue('dog');
      test.dequeue('cat');
      test.dequeue('dog');
      expect(test.catQ.front).toBeNull();
      expect(test.dogQ.front).toBeNull();
    });
    it('should successfully empty a queue after multiple dequeues', () => {
      const test = new AnimalShelter();
      test.enqueue('cat');
      test.enqueue('cat');
      test.dequeue('cat');
      test.dequeue('cat');
      expect(test.catQ.front).toBeNull();
    });
    it('should not enqueue species that are not cat or dog', () => {
      const test =  new AnimalShelter();
      expect(test.enqueue('asd')).toEqual('Not a valid species');
    });
    it('should not dequeue if the queue is empty', () => {
      const test =  new AnimalShelter();
      expect(test.dequeue('cat')).toEqual('No cats in queue');
      expect(test.dequeue('dog')).toEqual('No dogs in queue');
    });
  });
});
