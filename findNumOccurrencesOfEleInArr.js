/*
Given a sorted array of n elements, possibly with duplicates, find the number of occurrences of the target element.

Example 1:
Input: arr = [4, 4, 8, 8, 8, 15, 16, 23, 23, 42], target = 8
Output: 3      0 1  2  3  4  5   6   7   8   9

Example 2:
Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 6
Output: 0

Example 3:
Input: arr = [3, 5, 5, 5, 5, 7, 8, 8], target = 5
Output: 4
Expected O(logn) time solution.

Related problems:
https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
*/
function findOccurrences3(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        if (arr[mid] >= target) {
            hi = mid
        } else {
            lo = mid + 1
        }
    }
    if (arr[lo] !== target) return 0;
    let left = lo;
    hi = arr.length - 1;
    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        arr[mid] <= target ? lo = mid + 1 : hi = mid;
    }
    return lo - left
}

function findOccurrences(arr, target) {
    let left = binarySearch(arr, target, true)
    if (left < 0) return 0;
    let right = binarySearch(arr, target, false);
    return right - left + 1;
}
function binarySearch(arr, target, leftmost) {
    let lo = 0, idx = -1;
    let hi = arr.length - 1
    while (lo <= hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        console.log(target, mid, arr[mid], idx)
        if (target < arr[mid]) {
            hi = mid - 1;
        } else if (target > arr[mid]) {
            lo = mid + 1;
        } else {
            idx = mid;
            leftmost ? hi = mid - 1 : lo = mid + 1;
        }
        console.log('aft:', target, mid, arr[mid], idx)
    }
    return idx;
}

console.log(findOccurrences([4, 4, 8, 8, 8, 15, 16, 23, 23, 42], 8))
console.log(findOccurrences([3, 5, 5, 5, 5, 7, 8, 8], 6))
console.log(findOccurrences([3, 5, 5, 5, 5, 7, 8, 8], 5))