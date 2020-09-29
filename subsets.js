/*
https://leetcode.com/problems/subsets/
The reason why we need a queue in a general BFS approach because we need to

poll out all previous sub-results
re-calculate them
push them back into the queue

The reason why a queue is not used here because the BSF solution for this problem doesn't need to touch any existing sub-results, 
what we really need for every iteration is to add additional sub-results based on the existing ones.

Say before processing 2, the sub-results are [], [1], and those 2 existing ones are still valid results to represents scenarios 
where 2 is not used, what we need is to add 2 more sub-results to represents scenarios where 2 is in use [2] and [1,2]
*/


var subsets = function (nums) {
    let resSets = [[]];
    for (let i = 0; i < nums.length; i++) { //2
        let resCopy = [...resSets]; //[[], [1], [2], [1,2]]
        for (let j = 0; j < resCopy.length; j++) {
            let newSub = resCopy[j].concat(nums[i]);
            resSets.push(newSub);  //[[], [1], [2], [1,2], [3], [1,3], [2,3],[1,2,3]]
        }
    }
    return resSets;
}
