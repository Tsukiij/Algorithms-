/*Coding Question: Given a list of directed graph edges, return the num"b"er of reciprocal edges. A reciprocal edge is a reverse edge, e.g. A->B is a reciproval edge to B->A and vice versa.
Example:
Input: [ [A,B], [A,C], [B,C], [C,A] ]
Output: 1
Explanation: C->A is a reciprocal edge to A->C, or A->C is a reciprocal edge to C->A, so the answer is 1.
Don't remember seeing a similar problem on LC, but this was a really easy question and I basically just used a HashSet to store the edges, incrementing the answer when encountering an edge where its reverse edge was already in the Set.
Follow up: What if the input is a stream of edges and we have limited memory on each machine?
This basically becomes a design question. I generally went through how I would change the code and lay out the high level design of servers in a MapReduce way.*/




function reciprovalEdges(edges) {
    let seen = {};
    let count = 0;
    for (let edge of edges) {
        if (seen[edge[0]]) {
            if (edge[1] == seen[edge[0]]) {
                count++;
            }
        } else {
            seen[edge[1]] = edge[0];
        }
        console.log(seen)
    }
    return count;
}


console.log(reciprovalEdges([['A', "B"], ['A', 'C'], ["B", 'C'], ['C', 'A']]))