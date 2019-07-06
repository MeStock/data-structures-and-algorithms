'use strict';

const Graph = require('../code-challenges/graph/graph.js');
const Vertex = require('../code-challenges/graph/vertex.js');

describe('graphs', () => {
  it('should create a new graph', () => {
    const test = new Graph();
    expect(test).toBeInstanceOf(Graph);
  });
  it('should add new vertices', () => {
    const test = new Graph();
    test.addVertex(5);
    expect(test._adjacencyList.has(5)).toBeTruthy();
  });
  it('should add new edges', () => {
    const test = new Graph();
    const vertex5 = new Vertex(5);
    const vertex30 = new Vertex(30);

    test.addVertex(vertex5);
    test.addVertex(vertex30);
    test.addEdge(vertex5, vertex30, 5);
    expect(test._adjacencyList.get(vertex5).head.value.vertex.value).toEqual(30);
    expect(test._adjacencyList.get(vertex5).head.value.weight).toEqual(5);
  });
  it('should add get a vertecies neighboring verticies', () => {
    const test = new Graph();
    const vertex5 = new Vertex(5);
    const vertex30 = new Vertex(30);

    test.addVertex(vertex5);
    test.addVertex(vertex30);
    test.addEdge(vertex5, vertex30, 5);
    expect(test.getNeighbors(vertex5).value.vertex.value).toEqual(30);
  });
});
