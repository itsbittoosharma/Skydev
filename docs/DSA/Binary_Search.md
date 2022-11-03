---
sidebar_position: 6
---

# Binary Search

## Introduction
When the array is sorted (min, max) and has a definite space, we use binary search to reduce search time complexity. It has some really useful implementations, and some of the biggest companies are still asking questions about it.
The idea is that if the array is sorted, finding an element should not necessitate iterating over every element where the cost is O. (N). We can bypass some elements and still find the element in O(logn) time.

## Algorithm
We start with 2 pointers by keeping a low and high -> finding the mid and then comparing that with the number we want to find. If the target number is bigger, we move right -> as we know the array is sorted. If it’s smaller, we move left because it can’t be on the right side, where all the numbers are bigger than the mid value.
Here’s an iterative way to write the Binary search algorithm:  
```
int left = 0, right = A.length - 1;
// loop till the search space is exhausted
while (left <= right)
{
 // find the mid-value in the search space and
 // compares it with the target
 int mid = (left + right) / 2;
 // overflow can happen. Use:
 // int mid = left + (right - left) / 2;
 // int mid = right - (right - left) / 2;
 // key is found
 if (x == A[mid]) {
 return mid;
 }
 // discard all elements in the right search space,
 // including the middle element
 else if (x < A[mid]) {
 right = mid - 1;
 }
 // discard all elements in the left search space,
 // including the middle element
 else {
 left = mid + 1;
 }
}
```
### Recursive approach
```
def binarySearch (arr, l, r, x):
 # Check base case
 if r >= l:
 mid = l + (r - l) // 2

 # If element is present at the middle itself
 if arr[mid] == x:
 return mid

 # If element is smaller than mid, then it
 # can only be present in left subarray
 elif arr[mid] > x:
 return binarySearch(arr, l, mid-1, x)

 # Else the element can only be present
 # in right subarray
 else:
 return binarySearch(arr, mid + 1, r, x)

 else:
 # Element is not present in the array
 return -1
 ```

 ## Resources
 - [Lecture 5 MIT : Binary Search Trees, BST Sort | Lecture Videos](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/lecture-videos/lecture-5-binary-search-trees-bst-sort/)
 - [ Binary search cheat sheet for coding interviews. | by Tuan Nhu Dinh | The Startup](https://medium.com/swlh/binary-search-cheat-sheet-for-coding-interviews-9c5425af357e)
 - [ Binary Search Algorithm 101 | by Tom Sanderson | The Startup](https://medium.com/swlh/binary-search-algorithm-101-53e564659d82)
 - [ Introduction to Binary Search (Data Structures & Algorithms #10)](https://youtu.be/6ysjqCUv3K4)

## Questions
- [Leetcode - Binary Search](https://leetcode.com/problems/binary-search/)
- [Leetcode - Intersection of Two Arrays](https://leetcode.com/problems/intersection-of-two-arrays/)
- [Leetcode-First Bad Version](https://leetcode.com/problems/first-bad-version/)
- [Arranging Coins](https://leetcode.com/problems/arranging-coins/)
- [Search Insert Position](https://leetcode.com/problems/search-insert-position/)
- [Leetcode - Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)
- [Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
- [Leetcode - Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [Find Peak Element](https://leetcode.com/problems/find-peak-element/)
- [Leetcode Split Array Largest Sum](https://leetcode.com/problems/split-array-largest-sum/)
- [Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/)
- [Leetcode - Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/)
