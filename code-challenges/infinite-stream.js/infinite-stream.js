'use strict';

class Stream{
  constructor(){
    this.stream = ['a','a','f','b','d','e','a','a','g','b','b','a','a','c','c','a','a','h',null];
  }

  getNext(){
    return this.stream.shift();
  }
}

function _getCharactersFromMap(map, N){
  const result = [...map.entries()].sort((a, b) => b[1] - a[1]);
  return result.slice(0,N);
}

function getMax(stream, N){
  if(!stream || !N) return null;
  const UPPER_LIMIT = 10;
  const result = [];
  const unqiueCharacters = new Map();
  let nextValue = stream.getNext();
  let counter;
  while(nextValue !== null){
    if(!unqiueCharacters.has(nextValue)){
      counter = 1;
      unqiueCharacters.set(nextValue, counter);
    }else{
      counter = unqiueCharacters.get(nextValue) + 1;
      if(counter > UPPER_LIMIT){
        result.push(nextValue);
      }
    }
    unqiueCharacters.set(nextValue, counter);
    nextValue = stream.getNext();
  }
  if(result.length === N){
    return result;
  }
  return _getCharactersFromMap(unqiueCharacters, N);
}

module.exports = {
  getMax: getMax,
  Stream: Stream,
};
