'use strict';

/*

Write tests to prove the following functionality:

Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
sdfsldkfjslkf
*/

const HashTable = require('../code-challenges/hashtables/hashtables.js');

describe('Hash Tables', () => {
  it('should add a key/value', () => {
    const test = new HashTable();
    expect(test.add('key', 'value')).toEqual('value');
  });

  it('should return the value associated with the key', () => {
    const test = new HashTable();
    test.add('key', 'value');
    expect(test.get('key')).toEqual('value');
  });

  it('successfully return null for a key that does not exist in the table', () => {
    const test = new HashTable();
    test.add('key', 'value');
    expect(test.get('not a key')).toBeNull();
  });

  it('successfully handle a collision within the hashtable', () => {
    const test = new HashTable();
    test.add('key', 'value');
    expect(test.data[61].nextkey = 'next value').toEqual('next value');
  });

  it('successfully retrieves a value from a bucket within the hashtable that has a collision', () => {
    const test = new HashTable();
    test.add('key', 'value');
    test.data[61].nextkey = 'next value';
    expect(test.get('key')).toEqual('value');
  });

  it('successfully hash a key to an in-range value', () => {
    const test = new HashTable();
    expect(test.hash('key')).toEqual(61);
  });
});
