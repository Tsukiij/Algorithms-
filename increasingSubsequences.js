function increasingSubsequences(arr, K) {
    let n = arr.length;
    let dp = new Array(n).fill().map(row => new Array(K + 1).fill(0));
    for (let i = 0; i < n; ++i) {  // The idea is to use Dynamic Programming by define 2D matrix, say dp[][].
        dp[i][1] = 1;                   // dp[i][j] stores the count of increasing subsequences of size i ending with element arr[j]. 
    }

    for (let i = 1; i < n; ++i) {
        for (let j = 0; j < i; ++j) {
            for (let k = 1; k <= K; ++k) {
                console.log('i', i, 'j', j, 'k', k, 'arr[i]', arr[i], 'arr[j]', arr[j])
                if (arr[i] > arr[j]) {
                    dp[i][k] += dp[j][k - 1];
                }
                console.log(dp)
            }
        }
    }
    console.log('after nested for loops', dp)
    let ans = 0;
    for (let i = 0; i < n; ++i) {
        ans += dp[i][K];
    }
    return ans;
}


//subsequences of size k
function numOfIncSubseqOfSizeK(arr, k) {
    let n = arr.length
    let dp = new Array(k).fill().map(row => new Array(n).fill(0));
    let sum = 0;
    // count of increasing subsequences of size 1 
    // ending at each arr[i] 
    for (let i = 0; i < n; i++) {
        dp[0][i] = 1;
    }
    //console.log(dp)
    // building up the matrix dp[][] 
    // Here 'l' signifies the size of 
    // increassing subsequence of size (l+1). 
    for (let l = 1; l < k; l++) {

        // for each increasing subsequence of size 'l' 
        // ending with element arr[i] 
        for (let i = l; i < n; i++) {

            // count of increasing subsequences of size 'l' 
            // ending with element arr[i] 
            for (let j = l - 1; j < i; j++) {
                if (arr[j] < arr[i]) {
                    dp[l][i] += dp[l - 1][j];
                }
            }
        }
    }

    // sum up the count of increasing subsequences of 
    // size 'k' ending at each element arr[i] 
    for (let i = k - 1; i < n; i++) {
        sum += dp[k - 1][i];
    }

    // required number of increasing 
    // subsequences of size k 
    return sum;
}

function test() {
    console.log(numOfIncSubseqOfSizeK([1, 2, 3, 4, 5], 3))
    console.log(numOfIncSubseqOfSizeK([1, 2, 3, 5, 4], 3))
    console.log(numOfIncSubseqOfSizeK([5, 4, 3, 2, 1], 3))
    console.log(numOfIncSubseqOfSizeK([1, 2, 3, 4, 5], 4))

    console.log(numOfIncSubseqOfSizeK([10, 8, 6, 3, 7, 2, 4, 12, 9, 1, 11, 5], 3))
    console.log(numOfIncSubseqOfSizeK([6, 13, 5, 9, 12, 11, 13, 11, 8, 8, 9, 5, 1, 0, 3], 4))
    console.log(numOfIncSubseqOfSizeK([14, 9, 19, 17, 23, 5, 16, 21, 24, 12, 15, 7, 2, 11, 3, 10, 8, 6, 20, 22, 18, 13, 1, 4], 4))
    console.log(numOfIncSubseqOfSizeK([10, 1, 10, 3, 3, 9, 8, 9, 8, 1, 8, 9, 8, 6, 3, 4, 4, 5, 6, 8, 7, 7, 7, 6, 2, 9, 7, 1, 3, 5, 6, 3, 5, 6, 7, 7, 1, 1, 10, 5], 5))
}
test()
// output: 10 7 0 5 20 4 79 1898