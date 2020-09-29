
board =
    [[110, 5, 112, 113, 114], [210, 211, 5, 213, 214], [310, 311, 3, 313, 314], [410, 411, 412, 5, 414], [5, 1, 512, 3, 3], [610, 4, 1, 613, 614], [710, 1, 2, 713, 714], [810, 1, 2, 1, 1], [1, 1, 2, 2, 2], [4, 1, 4, 4, 1014]]
/* Output:
[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]
Explanation:
https://just4once.gitbooks.io/leetcode-notes/leetcode/two-pointers/723-candy-crush.html
*/

function candyCrush(board) {
    let height = board.length
    let width = board[0].length
    let crush = false
    //check for matching
    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            let val = Math.abs(board[row][col])
            if (val === 0) continue
            //check horizontal for 3 matching
            if (col + 2 < width && val === Math.abs(board[row][col + 1]) && val === Math.abs(board[row][col + 2])) {
                crush = true
                board[row][col] = board[row][col + 1] = board[row][col + 2] = - val
            }
            //check veritcal for 3 matching
            if (row + 2 < height && val === Math.abs(board[row + 1][col]) && val === Math.abs(board[row + 2][col])) {
                crush = true
                board[row][col] = board[row + 1][col] = board[row + 2][col] = -val
            }
        }
    }
    //crush the candy
    if (crush) {
        for (let col = 0; col < width; col--) {
            let id = height - 1
            for (let row = height - 1; row >= 0; row--) {
                if (board[row][col] > 0) {
                    board[id][col] = board[row][col]
                    id--
                }
            }

            while (id >= 0) {
                board[id][col] = 0
                id--
            }
        }
    }
    return crush ? candyCrush(board) : board
}

console.log(candyCrush(board))