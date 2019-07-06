'use strict';

const Stack = require('stack-lifo');

module.exports = (graph, startVertex, goalVertex) => {
  const stack = new Stack();
  const visitedVertices = new Set();

  const paths = new Map();

  stack.push(startVertex);
  visitedVertices.add(startVertex);

  while(stack.size() > 0) {
    const currentVertex = stack.pop();

    if(currentVertex === goalVertex) {
      return paths;
    }

    let neighbor = graph.getNeighbors(currentVertex);
    while(neighbor){
      if(!visitedVertices.has(neighbor.value.vertex)){
        visitedVertices.add(neighbor.value.vertex);
      }
      paths.set(neighbor.value.vertex, currentVertex);
      stack.push(neighbor.value.vertex);
      neighbor = neighbor.next;
    }
  }
  return null;
};
