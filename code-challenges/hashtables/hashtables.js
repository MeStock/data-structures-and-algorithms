'use strict';

/*

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.

*/

class HashTable{
  constructor(length){
    this.LENGTH = length || 100;
    this.data = new Array(this.LENGTH);
    for(let i = 0; i < this.LENGTH; i++){
      this.data[i] = {};
    }
  }

  _stringSum(key){
    return key.split('').reduce((accumulator, current) => {
      current = current.charCodeAt(0);
      return accumulator += current;
    },0);
  }

  hash(key){
    if(typeof key !== 'string' && typeof key !== 'number') return null;

    let convertedKey;
    if(typeof key === 'string'){
      convertedKey = this._stringSum(key);
    }else{
      convertedKey = key;
    }
    return convertedKey * 599 % (this.LENGTH - 1);
  }

  get(key){
    let index = this.hash(key);
    return this.data[index][key] ? this.data[index][key] : null;
  }

  contains(key){
    let index = this.hash(key);
    return !!this.data[index][key];
  }

  add(key, value){
    const index = this.hash(key);
    return Object.assign(this.data[index], {[key]: value})[key];
  }
}

module.exports = HashTable;
