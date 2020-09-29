/* Explanation:
the 2D grid is:
[[INF,  -1,  0,  INF],
[INF, INF, INF,  -1],
[INF,  -1, INF,  -1],
  [0,  -1, INF, INF]]
the answer is:
  3  -1   0   1
  2   2   1  -1
  1  -1   2  -1
  0  -1   3   4 */

function wallsAndGates(rooms) {
  for (let row = 0; row <= rooms.length; row++) {

    for (let i = 0; i < rooms.length; i++) {
      for (let j = 0; j < rooms[i].length; j++) {
        if (rooms[i][j] == 0) dfs(rooms, i, j, 0);
      }
    }
  }
  return rooms
}

function dfs(rooms, i, j, distance) {
  if (i < 0 || i >= rooms.length || j < 0 || j >= rooms[i].length || rooms[i][j] < distance) return;
  rooms[i][j] = distance;
  dfs(rooms, i + 1, j, distance + 1);
  dfs(rooms, i - 1, j, distance + 1);
  dfs(rooms, i, j + 1, distance + 1);
  dfs(rooms, i, j - 1, distance + 1);
}

console.log(wallsAndGates([[Infinity, -1, 0, Infinity], [Infinity, Infinity, Infinity, -1], [Infinity, -1, Infinity, -1], [0, -1, Infinity, Infinity]]));