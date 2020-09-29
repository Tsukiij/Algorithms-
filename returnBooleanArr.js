//Given an array of integers, return an array of Booleans that determine if a given number has another instance later in the array.
//[2, 1, 1, 3, 2] --> [true, true, false, false, false]
function returnBoolean(arr) {
    let booleanArr = []
    let hash = {}
    for (let i = arr.length - 1; i >= 0; i--) {
        let num = arr[i]
        if (num in hash) {
            booleanArr.unshift(true)
            hash[num]++
        } else {
            booleanArr.unshift(false)
            hash[num] = 1
        }
    }
    return booleanArr
}


console.log(returnBoolean([2, 1, 1, 3, 2]))
