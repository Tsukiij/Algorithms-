/*
Give an array of salaries. The total salary has a budget. At the beginning, the total salary of employees is larger than the budget. It is required to find the number k, and reduce all the salaries larger than k to k, such that the total salary is exactly equal to the budget.

Example 1:

Input: salaries = [100, 300, 200, 400], budget = 800
Output: 250
Explanation: k should be 250, so the total salary after the reduction 100 + 250 + 200 + 250 is exactly equal to 800.
You can assume that solution always exists.

Sort - [100, 200, 300, 400 ]
Replace maximum value with k, [ 100, 200, 300, k ]
Calculate k , k = (800-100-200-300) = 200
If k is less than the next max, Repeat from step 2 , else done.
2*. [100, 200, k, k ]
3* Calculate k , k = (800-100-200)/2 = 250
4* Done..

same solution of below can be used for budget
https://leetcode.com/discuss/interview-question/349612/Google-or-Phone-Screen-or-Array-Adjustment
max_value([10, 5, 20, 30], 40)
12
*/

const budgetize = (sals, budget) => {
    sals.sort((a, b) => a - b)
    let idxL = sals.length - 1;
    let count = 1 // salaries to convert to k
    let sum = sals.reduce((acum, val) => acum + val, 0) - sals[idxL--]
    let k = budget - sum;
    while (sals[idxL] > k) {
        sum -= sals[idxL--];
        count++
        k = (budget - sum) / count
    }
    return k
}

console.log(budgetize([100, 200, 300, 400], 800))

const maxValue = (nums, val) => {
    let l = Math.min(...nums);
    let r = Math.max(...nums) + 1;
    let m;
    while (l < r) {
        m = l + Math.floor((r - l) / 2)
        let sum = 0
        for (let n of nums) {
            if (n > m) {
                sum += m
            } else {
                sum += n
            }
        }
        if (sum == val) {
            return m
        } else if (sum < val) {
            l = m + 1
        } else {
            r = m
        }
    }
    return m
}
function test() {
    const arr = [100, 200, 300, 400];
    const maxVal = 800;
    console.log('Should be 250', maxValue(arr, maxVal))
}

function test1() {
    const arr = [10, 5, 20, 30];
    const maxVal = 40;
    console.log('Should be 12', maxValue(arr, maxVal))
}
test()
test1()