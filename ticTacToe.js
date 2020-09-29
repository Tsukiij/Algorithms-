//write a function that prints out a ticTacToe board;

class TicTacToe {
    constructor() {
        this.board = [['*', '*', '*'],
        ['*', '*', '*'],
        ['*', '*', '*']]
    }

    show() {
        this.board.forEach(row => console.log(row));
    }

    play(player, move) {
        let [row, col] = move;
        this.board[row][col] = player;
        console.log(this.checkWin());
    }

    checkWin() {
        //horizontal
        for (let player of ['X', 'O']) {
            for (let x = 0; x < this.board.length; x++) {
                let count = 0;
                for (let y = 0; y < this.board.length; y++) {
                    if (this.board[x][y] !== player) {
                        continue;
                    }
                    count++;
                }
                if (count == 3) {
                    return `Player ${player} Won`
                }
            }
        }
        //veritcal
        for (let player of ['X', 'O']) {
            for (let y = 0; y < this.board.length; y++) {
                let count = 0;
                for (let x = 0; x < this.board.length; x++) {
                    if (this.board[x][y] !== player) {
                        break;
                    }
                    count++;
                }
                if (count == 3) {
                    return `Player ${player} Won`
                }
            }
        }
        //diag
        for (let player of ['X', 'O']) {
            //top left to bottom
            if (player === this.board[0][0] && player === this.board[1][1] && player === this.board[2][2]) {
                return `Player ${player} Won`
            }

            //bottom left to top right 
            if (player === this.board[2][0] && player === this.board[1][1] && player === this.board[0][2]) {
                return `Player ${player} Won`
            }
        }
        //moves left
        let moves = 9;
        for (let x = 0; x < this.board.length; x++) {
            for (let y = 0; y < this.board.length; y++) {
                if (this.board[x][y] !== '*') {
                    continue;
                }
                moves--;
            }
        }
        if (moves == 0) {
            return `Tie`
        }
    }
}

function testWinHorizontal() {
    const game = new TicTacToe()
    game.show();
    game.play('X', [0, 0]);
    game.play('O', [1, 1]);
    game.play('X', [0, 1]);
    game.play('O', [2, 2]);
    game.play('X', [0, 2]);
    game.play('O', [2, 1]);
    game.show();
}
function testWinDiag() {
    const game = new TicTacToe()
    game.show();
    game.play('X', [0, 0]);
    game.play('O', [0, 1]);
    game.play('X', [1, 1]);
    game.play('O', [2, 2]);
    game.play('X', [2, 2]);
    game.play('O', [2, 1]);
    game.show();
}

testWinHorizontal();
testWinDiag()