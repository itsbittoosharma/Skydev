---
sidebar_position: 15
---

# Priority Queue

## Introduction

Priority Queue is a big part of greedy algorithms -> tons of questions revolve around priority queues and it’s important to understand how we can use them. They support insert, delete, getMax(), and other operations in logN time -> so instead of doing extra work with getting the max or min, we can use heaps and make it faster.

It’s a heap based structure where we can sort and store elements in a min/max fashion so that every time we need a new element -> we just pop it off from the top instead of sorting and computing the whole thing again.  


What is a heap? It’s a tree like structure with these conditions:
- Complete binary tree
- Min heap: Every node should be smaller than the ones below it. So the element at the top (root node) will be the min one.
- Max heap: Every node should be bigger than the ones below it. So the element at the top (root node) will be the max one.


Priority queues are also heavily used in graph theory -> where we want optimal paths or cheaper things. For eg: Cheap tickets from point A to B. We can store the edges in a priority queue as we iterate and then return the top path (with some other conditions).
Djikstra’s algorithm is a common one, where priority queue is used as the main data structure. It’s used to find shortest paths between nodes in a graph. Imagine an airplane flight network where we want the cheapest flight path. There are multiple short path algorithms which come under the banner of graph theory, where most of them have to do something with priority queues. So it boils down to the fundamental knowledge of BFS/DFS and how to add some tweaks for short paths, priority queue and
other things.  

## Resources
- [- Non Overlapping Intervals. This week I encountered many interval… | by Osgood Gunawan | The Startup](https://medium.com/swlh/non-overlapping-intervals-f0bce2dfc617)
- [ When to use Greedy Algorithms in Problem Solving](https://medium.com/javarevisited/when-to-use-greedy-algorithms-in-problem-solving-a081d5867186)
- [- Interval Scheduling Maximization (Proof w/ Exchange Argument)](https://youtu.be/hVhOeaONg1Y)


## Questions
- [Leetcode-Largest Number](https://leetcode.com/problems/largest-number/)
- [Graph Coloring Problem – Techie Delight](https://www.techiedelight.com/greedy-coloring-graph/)
- [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
- [Cheapest Flights Within K Stops](https://leetcode.com/problems/cheapest-flights-within-k-stops/)
- [Greedy](https://leetcode.com/problems/cheapest-flights-within-k-stops/)

