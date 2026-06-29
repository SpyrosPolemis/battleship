import { Player } from "./Player.js";
import { Ship } from "./Ship.js";

const player1 = new Player("1");
const player2 = new Player("2");

player1.gameboard.placeShip(new Ship(5), [0, 0], "h");
player1.gameboard.placeShip(new Ship(4), [0, 8], "v");
player1.gameboard.placeShip(new Ship(3), [9, 4]);
player1.gameboard.placeShip(new Ship(3), [5, 3]);
player1.gameboard.placeShip(new Ship(2), [7, 8]);

player2.gameboard.placeShip(new Ship(5), [0, 0], "h");
player2.gameboard.placeShip(new Ship(4), [0, 8], "v");
player2.gameboard.placeShip(new Ship(3), [9, 4]);
player2.gameboard.placeShip(new Ship(3), [3, 5]);
player2.gameboard.placeShip(new Ship(2), [8, 7]);

let activePlayer = player1;

export const gameDriver = {
  player1() {
    return player1;
  },
  player2() {
    return player2;
  },

  changeTurns() {
    if (activePlayer === player1) {
      activePlayer = player2;
    } else if (activePlayer === player2) {
      activePlayer = player1;
    } else {
      throw new Error("Something weird is happening");
    }
  },
  activePlayer() {
    return activePlayer;
  },
  otherPlayer(player) {
    // return the other player
    if (player === player1) {
      return player2;
    } else {
      return player1;
    }
  },
  computerTurn() {
    let coords = randomCoords();
    while (player2.gameboard.board[coords[0]][coords[1]].hit) {
      console.log("hmm");
      coords = randomCoords();
    }
    player1.gameboard.recieveAttack(...coords);
    this.changeTurns();
  },
};

function randomCoords() {
  const y = Math.floor(Math.random() * (9 - 0 + 1));
  const x = Math.floor(Math.random() * (9 - 0 + 1));
  return [y, x];
}
