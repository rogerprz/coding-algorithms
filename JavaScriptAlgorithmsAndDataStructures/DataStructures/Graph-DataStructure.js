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

  addVertex(v){
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v,[]);
  }
  addEdge(v, w){
    // get the list for vertex v and put the
    // vertex w denoting edge betweeen v and w
    this.AdjList.get(v).push(w);
    // Since graph is undirected,
   // add an edge from w to w also
    this.AdjList.get(w).push(v);
  }
  printGraph(){
    // get all the vertices
    let get_keys = this.AdjList.keys();
    //iterate over the vertices
    for (let i of get_keys) {
      // get the corresponding adjacency list
      // for the vertex
      let get_values = this.AdjList.get(i);
      let conc = ''
      //iterate over the adjacency list
      // concatenate the values into a string
      for (let j of get_values) {
        conc += j + " "
        }
      //log the vertex and its adjacency list
      console.log(i + " -> " + conc);
      }
  } //end of printGraph

}//end of class

//Implement and use Graph.

let g = new Graph(6)
let vertices = ["A",'B','C','D','E','F']


for (let i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i])
}

// adding edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

g.printGraph()
