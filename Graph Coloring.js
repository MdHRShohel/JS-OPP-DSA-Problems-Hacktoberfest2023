<script>


class Graph{

constructor(v)
{
	this.V = v;
	this.adj = new Array(v);

	for(let i = 0; i < v; ++i)
		this.adj[i] = [];
	
	this.Time = 0;
}


addEdge(v,w)
{
	this.adj[v].push(w);
	
	this.adj[w].push(v);
}


greedyColoring()
{
	let result = new Array(this.V);

	// Initialize all vertices as unassigned
	for(let i = 0; i < this.V; i++)
		result[i] = -1;

	result[0] = 0;


	let available = new Array(this.V);

	for(let i = 0; i < this.V; i++)
		available[i] = true;

	for(let u = 1; u < this.V; u++)
	{
		

		for(let it of this.adj[u])
		{
			let i = it;
			if (result[i] != -1)
				available[result[i]] = false;
		}

		let cr;
		for(cr = 0; cr < this.V; cr++)
		{
			if (available[cr])
				break;
		}

		result[u] = cr;

		for(let i = 0; i < this.V; i++)
			available[i] = true;
	}


	for(let u = 0; u < this.V; u++)
		document.write("Vertex " + u + " ---> Color " +
					result[u] + "<br>");
}
}


let g1 = new Graph(5);
g1.addEdge(0, 1);
g1.addEdge(0, 2);
g1.addEdge(1, 2);
g1.addEdge(1, 3);
g1.addEdge(2, 3);
g1.addEdge(3, 4);
document.write("Coloring of graph 1<br>");
g1.greedyColoring();

document.write("<br>");
let g2 = new Graph(5);
g2.addEdge(0, 1);
g2.addEdge(0, 2);
g2.addEdge(1, 2);
g2.addEdge(1, 4);
g2.addEdge(2, 4);
g2.addEdge(4, 3);
document.write("Coloring of graph 2<br> ");
g2.greedyColoring();


</script>
