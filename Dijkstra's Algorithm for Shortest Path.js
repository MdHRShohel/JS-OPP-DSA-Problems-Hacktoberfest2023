function dijkstra(graph, start) {
    const distances = {};
    const visited = new Set();
    Object.keys(graph).forEach(node => {
        distances[node] = Infinity;
    });
    distances[start] = 0;

    while (true) {
        let currentNode = null;
        Object.keys(distances).forEach(node => {
            if (!visited.has(node) && (currentNode === null || distances[node] < distances[currentNode])) {
                currentNode = node;
            }
        });

        if (currentNode === null) break;

        const neighbors = graph[currentNode];
        for (let neighbor in neighbors) {
            const newDistance = distances[currentNode] + neighbors[neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
            }
        }

        visited.add(currentNode);
    }

    return distances;
}
