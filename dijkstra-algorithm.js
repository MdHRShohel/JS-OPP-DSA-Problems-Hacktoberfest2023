class Graph {
  constructor() {
    this.nodes = new Set();
    this.edges = {};
  }

  addNode(node) {
    this.nodes.add(node);
    this.edges[node] = [];
  }

  addEdge(node1, node2, weight) {
    this.edges[node1].push({ node: node2, weight: weight });
    this.edges[node2].push({ node: node1, weight: weight });
  }
}

function dijkstra(graph, startNode) {
  const distance = {};
  const previous = {};
  const unvisitedNodes = new Set();

  for (const node of graph.nodes) {
    distance[node] = Infinity;
    previous[node] = null;
    unvisitedNodes.add(node);
  }

  distance[startNode] = 0;

  while (unvisitedNodes.size > 0) {
    const currentNode = getClosestNode(unvisitedNodes, distance);
    unvisitedNodes.delete(currentNode);

    for (const neighbor of graph.edges[currentNode]) {
      const potentialDistance = distance[currentNode] + neighbor.weight;
      if (potentialDistance < distance[neighbor.node]) {
        distance[neighbor.node] = potentialDistance;
        previous[neighbor.node] = currentNode;
      }
    }
  }

  return { distance, previous };
}

function getClosestNode(nodes, distance) {
  let closestNode = null;
  for (const node of nodes) {
    if (closestNode === null || distance[node] < distance[closestNode]) {
      closestNode = node;
    }
  }
  return closestNode;
}

// Example usage:
const graph = new Graph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");
graph.addNode("E");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "C", 5);
graph.addEdge("B", "D", 10);
graph.addEdge("C", "D", 3);
graph.addEdge("D", "E", 7
