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

    // for (let neighbor of graph.getNeighbors(currentVertex)){
    //   if(visitedVertices.has(neighbor.vertex)) {
    //     continue;
    //   } else {
    //     visitedVertices.add(neighbor.vertex);
    //   }
    //   paths.set(neighbor.vertex, currentVertex);
    //   stack.push(neighbor.vertex);
    // }
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
