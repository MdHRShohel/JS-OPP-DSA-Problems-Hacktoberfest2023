class Graph {
  
  let ADDED, DISTANCES, PARENTS;

  prim(startVertex) {
    ADDED = new Array(this.vertices.length).fill(false);
    DISTANCES = new Array(this.vertices.length).fill(Number.POSITIVE_INFINITY);
    PARENTS = new Array(this.vertices.length).fill(-1);

    DISTANCES[startVertex] = 0;
    let currentVertex = startVertex, currentEdge;

    while (!ADDED[currentVertex]) {
      ADDED[currentVertex] = true;
      currentEdge = this.connections[currentVertex];

      while (currentEdge) {
        let nextVertex = currentEdge.adjacencyInfo;
        let weight = currentEdge.weight;

        if (DISTANCES[nextVertex] > weight && !ADDED[nextVertex]) {
          DISTANCES[nextVertex] = weight;
          PARENTS[nextVertex] = currentVertex;
        }

        currentEdge = currentEdge.nextVertex;
      }

      currentVertex = 1;
      let bestCurrentDistance = Number.POSITIVE_INFINITY;

      for (let i = 0; i < this.vertices.length; i++) {
        if (!ADDED[i] && bestCurrentDistance > DISTANCES[i]) {
          bestCurrentDistance = DISTANCES[i];
          currentVertex = i;
        }
      }
    }
  }
}
