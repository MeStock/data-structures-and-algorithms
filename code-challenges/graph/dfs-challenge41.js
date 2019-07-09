'use strict';

function depthFirstTraversal(adjacenyList, visitedVerticies = new Set(), currentVertex = Object.keys(adjacenyList)[0]){
  if(!visitedVerticies.has(currentVertex)){
    visitedVerticies.add(currentVertex);
  }
  let neighbors = adjacenyList[currentVertex];
  for(let neighbor of neighbors){
    if(!visitedVerticies.has(neighbor)){
      visitedVerticies.add(neighbor);
    }else{
      return visitedVerticies;
    }
    depthFirstTraversal(adjacenyList, visitedVerticies, neighbor);
  }
  return (visitedVerticies);
}

module.exports = depthFirstTraversal;
