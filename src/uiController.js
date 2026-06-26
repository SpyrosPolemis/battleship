import { gameDriver } from "./gameDriver.js";

export const uiController = {
  renderBoard(player) {
    const board = document.createElement("div");
    board.classList.add("board");
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        const square = document.createElement("div");
        square.id = `${i}${j}`;
        square.classList.add("square");
        if (player.gameboard.board[i][j].hit === true) {
          square.classList.add("hit");
          if (player.gameboard.board[i][j].ship !== null) {
            square.classList.add("ship");
          }
        } else {
          square.addEventListener("click", () => {
            if (gameDriver.activePlayer() === player) {
              player.gameboard.recieveAttack(...Array.from(square.id, Number));
              gameDriver.changeTurns();
              this.renderBoard(player);
            }
          });
        }
        board.append(square);
      }
    }
    return board;
  },
};
