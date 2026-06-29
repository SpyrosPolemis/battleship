import { gameDriver } from "./gameDriver.js";

const body = document.querySelector("body");
const player1div = document.querySelector("#player1div");
const player2div = document.querySelector("#player2div");

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
          } else {
            square.classList.add("empty");
          }
        } else if (gameDriver.player2() === player) {
          square.addEventListener("click", () => {
            if (gameDriver.activePlayer() !== player) {
              player.gameboard.recieveAttack(...Array.from(square.id, Number));
              gameDriver.changeTurns();
              gameDriver.computerTurn();
              this.renderBoard(player);
              this.renderBoard(gameDriver.otherPlayer(player));
              if (gameDriver.player2().gameboard.checkAllSunk()) {
                this.displayVictor(gameDriver.player1());
              }
            }
          });
        }
        board.append(square);
      }
    }
    if (player.name === gameDriver.player1().name) {
      player1div.innerHTML = "";
      player1div.append(board);
    } else {
      player2div.innerHTML = "";
      player2div.append(board);
    }
  },
  displayVictor(player) {
    const victoryMsg = document.createElement("div");
    victoryMsg.textContent = `${player.name} has won!`;
    victoryMsg.classList.add("victory");
    body.append(victoryMsg);
  },
};
