  var INF = 99999;
	class AllPairShortestPath {
		constructor() {
		this.V = 4;
		}

		floydWarshall(graph) {
		var dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));
		var i, j, k;
		for (i = 0; i < this.V; i++) {
			for (j = 0; j < this.V; j++) {
			dist[i][j] = graph[i][j];
			}
		}
		for (k = 0; k < this.V; k++) {
			// Pick all vertices as source
			// one by one
			for (i = 0; i < this.V; i++) {
			// Pick all vertices as destination
			// for the above picked source
			for (j = 0; j < this.V; j++) {
				if (dist[i][k] + dist[k][j] < dist[i][j]) {
				dist[i][j] = dist[i][k] + dist[k][j];
				}
			}
			}
		}
		this.printSolution(dist);
		}

		printSolution(dist) {
		document.write(
			"Following matrix shows the shortest " +
			"distances between every pair of vertices<br>"
		);
		for (var i = 0; i < this.V; ++i) {
			for (var j = 0; j < this.V; ++j) {
			if (dist[i][j] == INF) {
				document.write(" INF ");
			} else {
				document.write("  " + dist[i][j] + " ");
			}
			}

			document.write("<br>");
		}
		}
	}
	var graph = [
		[0, 5, INF, 10],
		[INF, 0, 3, INF],
		[INF, INF, 0, 1],
		[INF, INF, INF, 0],
	];

	var a = new AllPairShortestPath();

	a.floydWarshall(graph);
