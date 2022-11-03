---
sidebar_position: 8
---

# Backtracking

## Introduction
Backtracking can be thought of as a more efficient version of brute force. Brute force methods consider every possibility. Backtracking means stopping evaluating a possibility as soon as it violates some constraint in the problem, taking a step back, and trying other possible cases to see if they lead to a valid solution.
Consider backtracking as searching for all possible solutions. You go to a place, nothing happens, so you go back and visit other places.  

Here’s a nice way to think of any problem:
- Recognize the pattern 
- Think of a human way to solve it
- Convert it into code

## Memoization
Memoization means storing a repetitive value, so that we can use it for later. A really nice example here:
- If you want to climb Mount Everest, you can recursively climb the smaller parts until you reach
the top. The base case would be the top, and you would have a recursive function climb() which
does the job.
- Imagine if there are 4 camps to Mount Everest, your recursive function would make you climb
the first one, then both 1 and 2, then 1-2-3 and so on. This would be tiring, cost more, and a lot of unnecessary work. Why would you repeat the work you’ve already done? This is where
memoization comes in.
- If you use memoization, you would store your camp ground once you reach it, so the next time
your recursive function works, it’ll get the camp ground value from the stored set.
```
function(i, value, something...){
 if base_case:
 do something
 if stored_value[i]:
 return stored_value[i]
 // do something (recursive call)
 stored_value[i] = value
}
```

**Dynamic programming** is Backtracking + Memoization. That’s it. Every problem is a part of this
algorithm -> explore all possible ways and then optimize them in such a way that we don’t explore
already explored paths. Stop solving dynamic programming problems the iterative way. Practice tons of recursion + backtracking problems, and then go the iterative way.

## Resources
- [A deep study and analysis of Recursive approach and Dynamic Programming](https://medium.com/nerd-for-tech/a-deep-study-and-analysis-of-recursive-approach-and-dynamic-programming-by-solving-the-most-8567b56de2b1)
- [Leetcode Pattern 3 | Backtracking | by csgator | Leetcode Patterns](https://medium.com/leetcode-patterns/leetcode-pattern-3-backtracking-5d9e5a03dc26)
- [A general approach to backtracking questions in Java (Subsets, Permutations, Combination Sum,Palindrome Partitioning)](https://leetcode.com/problems/subsets/discuss/27281/a-general-approach-to-backtracking-questions-in-java-subsets-permutations-combination-sum-palindrome-partitioning)
- [WTF is Memoization.| by Leo Wu | Medium](https://chialunwu.medium.com/wtf-is-memoization-a2979594fb2a)

## Questions
- [Word Search](https://leetcode.com/problems/word-search/)
- [Subsets](https://leetcode.com/problems/subsets/)
- [Letter Case Permutation](https://leetcode.com/problems/letter-case-permutation/)
- [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [Combinations](https://leetcode.com/problems/combinations/)
- [Combination Sum](https://leetcode.com/problems/combination-sum/)
- [ Leetcode - Combination Sum II](https://leetcode.com/problems/combination-sum-ii/)
- [Combination Sum III](https://leetcode.com/problems/combination-sum-iii/)
- [ Combination Sum IV](https://leetcode.com/problems/combination-sum-iv/)
- [Permutations](https://leetcode.com/problems/permutations/)
- [Permutations II](https://leetcode.com/problems/permutations-ii/)
- [Next Permutation](https://leetcode.com/problems/next-permutation/)
- [N-Queens](https://leetcode.com/problems/n-queens/description/)
