//A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.

// functions to be implemented

   // addVertex(v)
   // addEdge(v, w)
   // printGraph()

   // bfs(v)
   // dfs(v)
//Below we store the number of vertices in the graph and
// AdjList, which stores a adjacency list of a particular vertex.
// We used a Map Object provided by ES6 in order to implement Adjacency list.
// Where key of a map holds a vertex and values holds an array of adjacent node

class Graph {
  constructor(numOfVertices) {
    this.numOfVertices = numOfVertices;
    this.AdjList = new Map();

  }
  addVertex(v
    // initialize the adjacent list with a
    // null array
    this.AdList.set(v,[]);
  }
  addEdge(v, w){
    // get the list for vertex v and put the
    // vertex w denoting edge betweeen v and w
    this.AdjList.get(v).push(w);
    // Since graph is undirected,
   // add an edge from w to w also
    this.AdjList.get(w).push(v);
  }
}
