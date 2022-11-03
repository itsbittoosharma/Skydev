---
sidebar_position: 7
---

# Recursion

## Introduction
Consider it as solving smaller problems in order to eventually solve a larger problem. So, if you want to climb Mount Everest, you can climb the smaller parts recursively until you reach the summit.
Another example is that you want to eat '15 butter naan,' so eating them all at once is not possible. Instead, you would divide them into 1 at a time and enjoy it on the way.

Solving a lot of recursive problems will help you understand 3 core concepts
- Recursion
- Backtracking
- Dynamic programming

These are some questions when we look at a recursive question/solution.  

- What happens when the function is called in the middle of the whole recursive function?
- What happens to the stuff below it?
- What do we think of the base case?
- How do we figure out when to return ?
- How do we save the value, specially in the true/false questions?
- How does backtracking come into place, wrt recursion?  


Let’s try to answer these one by one. A recursive function means that we’re breaking the problem down into a smaller one. So if we’re saying function(x/2) -> we’re basically calling the function again with the same parameters.

So if there’s something below the recursive function -> that works with the same parameter. For
instance, calling function(x/2) with x=10 and then printing (x) after that would print 10 and then 5 and so on. Think of it as going back to the top of the function, but with different parameters.  
The return statements are tricky with recursive functions. You can study about those things, but practice will help you get over it. For instance, you have fibonacci, where we want to return the sum of the last 2 elements for the current element -> the code is something like fib(n) + fib(n-1) where fib() is the recursive function. So this is solving the smaller problem until when? -> Until the base case. And the base case will return 1 -> because eventually we want the fib(n) to return a number. This is a basic example, but it helps you gain some insights on the recursive part of it. 
