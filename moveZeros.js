var moveZeroes1 = function (nums) {
    let end = nums.length
    for (let i = 0; i <= end; i++) {
        if (nums[i] === 0) {
            let zero = nums.splice(i, 1)
            nums.push(zero)
            i--
            end--
        }
    }
    return nums
};
/* General idea is to scan the array twice.
The first scan, use two pointers: one index pointer to maintain non-zero subarray( modify the original array ), 
the other index to loop through the original array. If the current element being examined is 0, then skip; if it’s not 0, 
move it to the non-zero subarray.
After the first round, all the non-zero elements should be squeezed to the left part of the original array.
 So the second round we just add zeros to the empty slots.
*/
var moveZeroes = function (nums) {
    let idx = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[idx++] = nums[i];
        }
    }

    while (idx < nums.length) {
        nums[idx++] = 0;
    }
    return nums;
}