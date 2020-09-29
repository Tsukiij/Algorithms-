function longestCommonSubsequence(text1, text2) {
    let memo = new Array(text1.length + 1).fill().map(row => new Array(text2.length + 1).fill(0))
    let maxLen = 0
    for (let i = 1; i < text1.length + 1; i++) {
        for (let j = 1; j < text2.length + 1; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                memo[i][j] = 1 + memo[i - 1][j - 1]
            } else {
                memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1])
            }
            maxLen = Math.max(maxLen, memo[i][j])
        }
    }
    console.log(memo)
    return maxLen
}

longestCommonSubsequence("abcde", "ace")
longestCommonSubsequence("abc", "def")

/**Dynamic Programming – Longest Common Substring
Objective: Given two string sequences write an algorithm to find, find the length of longest substring present in both of them.
Dynamic Programming – Longest Common Substring
Objective: Given two string sequences write an algorithm to find, find the length of longest substring present in both of them.
*/


function longestCommonSubstring(text1, text2) {
    let memo = new Array(text1.length + 1).fill().map(row => new Array(text2.length + 1).fill(0))
    let maxLen = 0;
    for (let i = 1; i < text1.length + 1; i++) {
        for (let j = 1; j < text2.length + 1; j++) {
            if (text1[i - 1] == text2[j - 1]) {
                memo[i][j] = memo[i - 1][j - 1] + 1;
            } else {
                memo[i][j] = 0;
            }
            maxLen = Math.max(maxLen, memo[i][j])
        }
    }
    console.log(memo, maxLen)
    return maxLen
}

longestCommonSubstring("tutorialhorizon", "dynamictutorialProgram")