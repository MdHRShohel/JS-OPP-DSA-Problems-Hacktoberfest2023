class Edge {
constructor(src, dest, weight) {
	this.src = src;
	this.dest = dest;
	this.weight = weight;
}
}

class Graph {
constructor(V, E) {
	this.V = V;
	this.E = E;
	this.edge = [];
}
}

function createGraph(V, E) {
const graph = new Graph(V, E);
for (let i = 0; i < E; i++) {
	graph.edge[i] = new Edge();
}
return graph;
}

function printArr(dist, V) {
console.log("Vertex Distance from Source");
for (let i = 0; i < V; i++) {
	console.log(`${i} \t\t ${dist[i]}`);
}
}

function BellmanFord(graph, src) {
const V = graph.V;
const E = graph.E;
const dist = [];

for (let i = 0; i < V; i++) {
	dist[i] = Number.MAX_SAFE_INTEGER;
}
dist[src] = 0;

for (let i = 1; i <= V - 1; i++) {
	for (let j = 0; j < E; j++) {
	const u = graph.edge[j].src;
	const v = graph.edge[j].dest;
	const weight = graph.edge[j].weight;
	if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
		dist[v] = dist[u] + weight;
	}
	}
}

for (let i = 0; i < E; i++) {
	const u = graph.edge[i].src;
	const v = graph.edge[i].dest;
	const weight = graph.edge[i].weight;
	if (dist[u] !== Number.MAX_SAFE_INTEGER && dist[u] + weight < dist[v]) {
	console.log("Graph contains negative weight cycle");
	return;
	}
}

printArr(dist, V);
}

const V = 5;
const E = 8;
const graph = createGraph(V, E);

graph.edge[0] = new Edge(0, 1, -1);
graph.edge[1] = new Edge(0, 2, 4);
graph.edge[2] = new Edge(1, 2, 3);
graph.edge[3] = new Edge(1, 3, 2);
graph.edge[4] = new Edge(1, 4, 2);
graph.edge[5] = new Edge(3, 2, 5);
graph.edge[6] = new Edge(3, 1, 1);
graph.edge[7] = new Edge(4, 3, -3);

BellmanFord(graph, 0);
