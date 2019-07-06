'use strict';

const LinkedList = require('../linked-list/insert-include-print.js');

module.exports = class Graph{
  constructor(){
    // Vinicio - adjacency list
    this._adjacencyList = new Map();
  }

  addVertex(vertex) {
    const LL = new LinkedList();
    this._adjacencyList.set(vertex, LL);
  }

  // Vinicio - this edges are directed
  addEdge(startVertex, endVertex, weight = 0) {
    if(!this._adjacencyList.has(startVertex) ||
    !this._adjacencyList.has(endVertex)) {
      throw new Error('_INVALID_VERTEX_');
    }

    const edgeData = {
      vertex: endVertex,
      weight,
    };

    this._adjacencyList.get(startVertex).insert(edgeData);
  }

  getNeighbors(vertex){
    if(!this._adjacencyList.has(vertex)){
      throw new Error('_INVALID_VERTEX_');
    }
    return this._adjacencyList.get(vertex).head;
  }
};
