function prim(graph) {
    const vertices = Object.keys(graph);
    const visited = new Set();
    const result = [];

    visited.add(vertices[0]);

    while (visited.size < vertices.length) {
        let minWeight = Infinity;
        let startVertex = null;
        let endVertex = null;

        for (let vertex of visited) {
            for (let neighbor in graph[vertex]) {
                if (!visited.has(neighbor) && graph[vertex][neighbor] < minWeight) {
                    minWeight = graph[vertex][neighbor];
                    startVertex = vertex;
                    endVertex = neighbor;
                }
            }
        }

        result.push({ start: startVertex, end: endVertex, weight: minWeight });
        visited.add(endVertex);
    }

    return result;
}
