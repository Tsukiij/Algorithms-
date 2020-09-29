/*
Question: Identify and return the number of word "Google" appearing in comments in C++ or JavaScript source code.
Similar LC Problem: https://leetcode.com/problems/remove-comments/
The logic was not hard, but really annoying to implement. I was able to implement the bulk of the logic during the interview, but missed to handle the cases of string literals inside "", '', and multi-line string literal in ``. In the end, there wasn't enough time to finish coding for the string literals, so I just described orally how I would handle them.
*/

function countComment(source) {
    let inBComment = false;
    let inLineComment = false;
    let count = 0;
    for (let line of source) {
        inLineComment = false;
        for (let i = 0; i < line.length; i++) {
            if (!inBComment && line.slice(i, i + 2) == '/*') {
                inBComment = true;
                i++
            } else if (inBComment && line.slice(i, i + 2) == '*/') {
                inBComment = false;
                i++
            } else if (!inBComment && line.slice(i, i + 2) == '//') {
                inLineComment = true;
                i++
            }
            if (inBComment || inLineComment) {
                if (line.slice(i, i + 6) == "Google") count++;
            }
        }
    }
    console.log(count)
    return count
}



countComment(["/*Test program Google */", "int main()", "{ ", "  // Google declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "  Google comment for ", "   testing */", "a = b + c;", "}"])
countComment(["a/*comment", "Google", "more_comment*/b"])


// examples
// ["/*Test program Google */", "int main()", "{ ", "  // Google declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "  Google comment for ", "   testing */", "a = b + c;", "}"] 
//output = 3
// ["a/*comment", "Google", "more_comment*/b"] output =1

/*
Given a m-by-n matrix containing positive numbers, you start from top left and travel towards bottom right. 
You can move in either up, down, left, or right directions. When moving from a higher number to lower or equal number, the cost is 0. 
When moving from a lower number to a higher number, the cost is the absolute difference. 
Find and return the minimum cost from top left to bottom right of the matrix. 
[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
*/
function findMinCost(matrix) {
    let row = matrix.length, col = matrix[0].length;
    let dp = new Array(row).fill().map(row => new Array(col).fill(Infinity));
    dp[0][0] = 0;
    for (let r = 0; r < row; r++) {
        for (let c = 0; c < col; c++) {
            if (r == 0 && c > 0) {
                let cost = matrix[r][c] <= matrix[r][c - 1] ? 0 : matrix[r][c] - matrix[r][c - 1];
                dp[r][c] = cost + dp[r][c - 1];
            } else if (c == 0 && r > 0) {
                let cost = matrix[r][c] <= matrix[r - 1][c] ? 0 : matrix[r][c] - matrix[r - 1][c];
                dp[r][c] = cost + dp[r - 1][c]
            } else if (r > 0 && c > 0) {
                let cost1 = matrix[r][c] <= matrix[r][c - 1] ? 0 : matrix[r][c] - matrix[r][c - 1];
                let cost2 = matrix[r][c] <= matrix[r - 1][c] ? 0 : matrix[r][c] - matrix[r - 1][c];
                dp[r][c] = Math.min(dp[r - 1][c] + cost2, cost1 + dp[r][c - 1])
            }
        }
    }
    //console.log(dp)
    return dp[row - 1][col - 1]
}


findMinCost([
    [6, 5, 6, 4, 8],
    [4, 2, 3, 3, 4],
    [3, 4, 5, 3, 1],
    [5, 4, 1, 4, 5],
    [3, 6, 1, 2, 4]])
/*
Given the same m-by-n matrix, however, this time you can only move from a higher number to lower number.
You can increase any number so that you can move to the next number. Find and return the minimum amount to
increase in order to move from top left to bottom right of the matrix.
 */ //travelling backwards.
function findMinCost2(matrix) {
    let row = matrix.length, col = matrix[0].length;
    let dp = new Array(row).fill().map(row => new Array(col).fill(Infinity));
    dp[row - 1][col - 1] = 0;
    for (let r = row - 1; r >= 0; r--) {
        for (let c = col - 1; c >= 0; c--) {
            if (r == row - 1 && c < col - 1) {
                let cost = matrix[r][c] < matrix[r][c + 1] ? 0 : matrix[r][c] - matrix[r][c + 1];
                dp[r][c] = dp[r][c + 1] + cost;
            } else if (c == col - 1 && r < row - 1) {
                let cost = matrix[r][c] < matrix[r + 1][c] ? 0 : matrix[r][c] - matrix[r + 1][c];
                dp[r][c] = dp[r + 1][c] + cost;
            } else if (r < row - 1 && c < col - 1) {
                let cost1 = matrix[r][c] < matrix[r][c + 1] ? 0 : matrix[r][c] - matrix[r][c + 1];
                let cost2 = matrix[r][c] < matrix[r + 1][c] ? 0 : matrix[r][c] - matrix[r + 1][c];
                dp[r][c] = Math.min(cost1 + dp[r][c + 1], cost2 + dp[r + 1][c])
            }
        }
    }
    return dp[0][0];
}

findMinCost2([
    [6, 5, 6, 4, 8],
    [4, 2, 3, 3, 4],
    [3, 4, 5, 3, 1],
    [5, 4, 1, 4, 5],
    [3, 6, 1, 2, 4]])


