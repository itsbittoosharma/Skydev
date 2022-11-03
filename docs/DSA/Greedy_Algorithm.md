---
sidebar_position: 14
---

# Greedy Algorithm

## Introduction
Algorithms where we make choices at every step because of a reason (optimal choice) are called greedy algorithms. Like returning the max everytime in an array, or maybe returning the cheapest food near you from a list of restaurants with multiple menu items. Greedy answers can definitely work, but it might not be the most optimal thing to do wrt time and space complexity.
For instance, you have a tree and you want to find the maximum path sum of that tree. The correct solution to that would be to explore all different cases, add memoization to the logic, and finally return the max path sum from that. However, if you try to use a greedy approach right from the top, you would end up making the wrong mistake of choosing the maximum element at every level - which would be wrong. So we have to be smart about using it at the right time. Here are some sub topics which will help
you understand things in a better way.  


A lot of questions can be solved by sorting the input and then adding some logic to that. Let’s discuss a question: meeting rooms. We have the starting and ending times for a room throughout the day. And we want to check how many people can be there at the maximum time or something -> so we sort the times, arrange the people in terms of the time and then find the maximum while iterating through the instances. Let’s discuss some problems on similar concepts. 

