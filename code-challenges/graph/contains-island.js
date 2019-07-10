'use strict';

const dfs = require('./dfs-challenge41.js');

function containsIsland(_adjacenyList){
  if(!_adjacenyList)return null;
  const setOfNonIslands = dfs(_adjacenyList);
  const allVerticies = Object.keys(_adjacenyList);
  for(let i = 0; i < allVerticies.length; i++){
    if(!setOfNonIslands.has(allVerticies[i])){
      return true;
    }
  }
  return false;
}

module.exports = containsIsland;
