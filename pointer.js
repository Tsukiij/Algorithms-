function findSum(arr, target) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum == target) {
            return true
        } else if (sum > target) {
            right--
        } else if (sum < target) {
            left++
        }
    }
    return false
}


console.log(findSum([1, 5, 6, 9], 8))
console.log(findSum([1, 3, 4, 4], 8))



