//https://leetcode.com/problems/number-of-islands/
/*
Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.
Input:
11110
11010
11000
00000
Output: 1

Example 2:
Input:
11000
11000
00100
00011
Output: 3 */

var numIslands = function (grid) {

    let islands = 0;
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islands++;
                findNeighborIsland(grid, row, col);
            }
        }
    }
    return islands;
}

/*it's following the pattern of other graph like problems where you don't always have 4 adjacent nodes
so you shouldn't just always hardcode the function 4 times cause sometimes you might do some processing 
before you visit the node or do the recursion so you don't want to repeat that 4 times 
Yeah this is the same efficiency it’s jsut cleaner
like you might want to do the out of bounds check before you visit the node
in this case you might not, but there may be some other cases*/

function findNeighborIsland(grid, row, col) {
    const height = grid.length - 1;
    const width = grid[0].length - 1;

    grid[row][col] = '0';

    for (const [nextRow, nextCol] of [[row - 1, col], [row + 1, col], [row, col + 1], [row, col - 1]]) {
        if (nextRow < 0 || nextCol < 0 || nextRow > height || nextCol > width) {
            continue;
        }
        if (grid[nextRow][nextCol] !== '0') {
            continue
        }

        findNeighborIsland(grid, nextRow, nextCol);
    }
    // findNeighborIsland(grid, row-1, col);
    // findNeighborIsland(grid, row+1, col);
    // findNeighborIsland(grid, row, col+1);
    // findNeighborIsland(grid, row, col-1);
}

console.log(numIslands([["1", "1", "1", "1", "0"], ["1", "1", "0", "1", "0"], ["1", "1", "0", "0", "0"], ["0", "0", "0", "0", "0"]]));