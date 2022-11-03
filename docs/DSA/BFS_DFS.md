---
sidebar_position: 9
---

## Introduction
These are techniques for finding something. It applies to arrays, graphs, trees, and so on. Many people mistake this for something related to graphs, but it is simply a technique for solving a generic search problem.
Here’s a great visualizer tool: [Graph Traversal (Depth/Breadth First Search)](https://visualgo.net/en/dfsbfs)

Try to understand the iterative way of solving a DFS or BFS question and how things work. There are 3 basic things
- Push the first node
- Iterate over all nodes (first time it’s just the root)
- Pop the top element
- Add the neighbors
- Repeat (Usually through the while or for loop)
Here’s a beautiful visualization of a search in a tree: [Branch and Bound - Depth-Limited Search](https://algorithm-visualizer.org/branch-and-bound/depth-limited-search)


Here’s a general iterative dfs pseudo-code template:
```
def dfs(root, target):
 stack = []
 stack.append(root) # add the first item

 while len(stack)>0:
 node = stack.pop() # pop the grid item

 if(node == target):
 return true

 # explore more
 # For trees -> if root.left or root.right
 if (condition):
 stack.append(new_item)

 return false;
 ```
The second step is that of **MEMOIZATION** and we want to keep a track of all the nodes visited when
we’re iterating over. Here’s a complete version of a BFS algorithm where we keep track of the visited node using an array **discovered []**
This could be anything - array, map, set - depending on the situation. The only thing we need is to store the visited things so that we’re not repeating any work.

```
public static void BFS(Graph graph, int v, boolean[] discovered)
 {
 // create a queue for doing BFS
 Queue<Integer> q = new ArrayDeque<>();
 // mark the source vertex as discovered
 discovered[v] = true;
 // enqueue source vertex
 q.add(v);
 // loop till queue is empty
 while (!q.isEmpty())
 {
 // deque front node and print it
 v = q.poll();
 System.out.print(v + " ");
 // do for every edge `v --> u`
 for (int u: graph.adjList.get(v))
 {
 if (!discovered[u])
 {
 // mark it as discovered and enqueue it
 discovered[u] = true;
 q.add(u);
 }
 }
 }
 }
 ```
Trying to think of a recursive way to do this is also very important. We call dfs for every node after exploring the neighbors and can do that in a couple of ways -> inside the for loop or outside the for loop after adding the neighbors to a list. Here’s an approach, also linking other approaches below.

```
public static void recursiveBFS(Graph graph, Queue<Integer> q,
 boolean[] discovered)
{
 if (q.isEmpty()) {
 return;
 }
 // deque front node and print it
 int v = q.poll();
 System.out.print(v + " ");
 // do for every edge `v --> u`
 for (int u: graph.adjList.get(v))
 {
 if (!discovered[u])
 {
    // mark it as discovered and enqueue it
 discovered[u] = true;
 q.add(u);
 }
 }
 recursiveBFS(graph, q, discovered);
}
```
Other recursive ways: [Depth First Search or DFS for a Graph](https://www.geeksforgeeks.org/depth-first-search-or-dfs-for-a-graph/)

Why are we discussing how to implement a simple search algorithm? Because this is the fundamental solution to many problems. Many graph problems require you to know dfs, bfs, and this is one of those things that is usually used in conjunction with other things. For example, suppose you have a 2D matrix with something inside it and you want to find the shortest path -> boom, BFS. Or perhaps you have a graph and want to find the vertex -> DFS/BFS. So it takes many forms, and it's critical to fully comprehend it before proceeding.


Here are some implementations and use cases for DFS, BFS:
DFS:
- Find connected components in a graph
- Calculate the vertex or edges in a graph
- Whether the graph is strongly connected or not
- Wherever you want to explore everything or maybe go in depth  
  
BFS
- Shortest path algorithms and questions
- Ford fulkerson algorithm
- Finding nodes in a graph
- Wherever there is a shortest thing, finding something quickly, etc.

## Resources
- [ Leetcode patterns 1](https://medium.com/leetcode-patterns/leetcode-pattern-1-bfs-dfs-25-of-the-problems-part-1-519450a84353)
- [ Leetcode Patterns 2](https://medium.com/leetcode-patterns/leetcode-pattern-2-dfs-bfs-25-of-the-problems-part-2-a5b269597f52)
- [ Depth-First Search (DFS) vs Breadth-First Search (BFS) – Techie Delight](https://www.techiedelight.com/depth-first-search-dfs-vs-breadth-first-search-bfs/)

## Questions
- [ Flood Fill](https://leetcode.com/problems/flood-fill/)
- [Leetcode - Binary Tree Preorder Traversal](https://leetcode.com/problems/binary-tree-preorder-traversal/)
- [Number of Islands](https://leetcode.com/problems/number-of-islands/)
- [Walls and Gates](https://leetcode.com/problems/walls-and-gates/)
- [Max Area of Island](https://leetcode.com/problems/max-area-of-island/)
- [Number of Provinces](https://leetcode.com/problems/number-of-provinces/description/)
- [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [C/C++ Program for Detect cycle in an undirected graph](https://www.geeksforgeeks.org/detect-cycle-undirected-graph/)
- [127. Word Ladder](https://leetcode.com/problems/word-ladder/)
- [542. 01 Matrix](https://leetcode.com/problems/01-matrix/)
- [Rotting Oranges](https://leetcode.com/problems/rotting-oranges/)
- [279. Perfect Squares](https://leetcode.com/problems/perfect-squares/)
- [797. All Paths From Source to Target](https://leetcode.com/problems/all-paths-from-source-to-target/)
- [1254. Number of Closed Islands](https://leetcode.com/problems/number-of-closed-islands/)