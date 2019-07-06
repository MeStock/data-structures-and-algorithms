'use strict';
const Queue = require('queue-fifo');

module.exports = (graph, startVertex, goalVertex) => {
  const queue = new Queue();
  const visitedVertices = new Set();

  const paths = new Map();

  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);


  while(queue.size() > 0) {
    const currentVertex = queue.dequeue();

    if(currentVertex === goalVertex) {
      return paths;
    }

    let neighbor = graph.getNeighbors(currentVertex);
    while(neighbor){
      if(!visitedVertices.has(neighbor.value.vertex)){
        visitedVertices.add(neighbor.value.vertex);
      }
      paths.set(neighbor.value.vertex, currentVertex);
      queue.enqueue(neighbor.value.vertex);
      neighbor = neighbor.next;
    }
  }
  return null;
};
