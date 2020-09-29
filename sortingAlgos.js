function bubblesort(arr) {
    let swap = true;
    while (swap) {
        swap = false
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                swap = true
                let temp = arr[i - 1];
                arr[i - 1] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;

}
function test() {
    let res = bubblesort([5, 1, 4, 2, 8])
    console.log(res)
}

test()


function mergeSort(arr) {
    if (arr.length == 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(mergeSort(left), mergeSort(right))
}


function merge(left, right) {
    let resArr = [];
    let lIdx = 0, rIdx = 0;
    while (lIdx < left.length && rIdx < right.length) {
        if (left[lIdx] < right[rIdx]) {
            resArr.push(left[lIdx++]);
        } else {
            resArr.push(right[rIdx++]);
        }
    }
    return resArr.concat(left.slice(lIdx)).concat(right.slice(rIdx))
}


function test1() {
    let arr = [38, 27, 43, 3, 9, 82, 10]
    console.log(mergeSort(arr))
}

function test2() {
    let arr1 = [4, 1, 3, 9, 7];
    console.log('should output: [1 3 4 7 9]', mergeSort(arr1))

    let arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    console.log('should output: [1 2 3 4 5 6 7 8 9 10]', mergeSort(arr2))
}

test1()
test2()