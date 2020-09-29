/* Given an array A of integers and a target value. Find out how many pairs(A[i], A[j]) sum up to the value, where i is less than j.
Sample inputs - Expected outputs

    [0, 3, 2, 5], 5  -> 2, result: (3, 2), (0, 5)
    [1, 2, 1, 1], 3  -> 3, result: (1, 2), (2, 1), (2, 1)
    [1, 2, 1, 1, 2], 3 -> 6, result: (1, 2), (1, 2), (2, 1), (2, 1), (1, 2), (1, 2)
    */
/* Brute force
function findPairs(array, targetSum) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let potentialMatch = array[i] + array[j]
            if (potentialMatch === targetSum) {
                result.push([array[i], array[j]])
            }
        }
    }
    return result
} */

function findPairs(array, targetSum) {
    const result = [];
    const numFreq = {}
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i]
        const pastNumToLookFor = targetSum - currentNum

        if (numFreq[pastNumToLookFor]) {
            const addToTotal = numFreq[pastNumToLookFor]
            const filledArr = new Array(addToTotal).fill([pastNumToLookFor, currentNum])
            result.push(...filledArr)
        }
        numFreq[currentNum] = (numFreq[currentNum] || 0) + 1
    }
    return result;
}

// function findPairs(array, targetSum) {
//     let result = []
//     const hash = {}
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         const currentNum = array[i]
//         const pastNumToLookFor = targetSum - currentNum

//         //look for pastNum and add to total if found
//         if (pastNumToLookFor in hash) {
//             const addToTotal = hash[pastNumToLookFor]
//             total += addToTotal
//             let filledArr = new Array(addToTotal).fill([pastNumToLookFor, currentNum])
//             result.push(filledArr)
//         }
//         //update hash map with new number
//         if (hash.hasOwnProperty(currentNum)) {
//             hash[currentNum] += 1
//         } else {
//             hash[currentNum] = 1
//         }
//     }
//     return result
// }

console.log(findPairs([1, 2, 1, 1], 3))
console.log(findPairs([0, 3, 2, 5], 5))
console.log(findPairs([1, 2, 1, 1, 2], 3))
console.log(findPairs([1, 1, 1, 1, 1], 2))