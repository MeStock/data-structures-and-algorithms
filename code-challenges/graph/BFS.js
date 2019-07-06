'use strict';
const Queue = require('queue-fifo');

module.exports = (graph, startVertex, goalVertex) => {
  const queue = new Queue(); // Vinicio - HW, make this a real queue - https://www.npmjs.com/package/queue-fifo
  const visitedVertices = new Set();

  const paths = new Map();

  queue.enqueue(startVertex);
  visitedVertices.add(startVertex);


  while(queue.size() > 0) {
    // dequeue
    // check for goal
    // loop over all the neighobrs
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
