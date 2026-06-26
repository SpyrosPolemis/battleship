import { Player } from "./Player.js";
import { Ship } from "./Ship.js";

const player1 = new Player();
const player2 = new Player();

player1.gameboard.placeShip(new Ship(5), [0, 0], "h");
player1.gameboard.placeShip(new Ship(4), [8, 0], "v");
player1.gameboard.placeShip(new Ship(3), [4, 9]);
player1.gameboard.placeShip(new Ship(3), [3, 5]);
player1.gameboard.placeShip(new Ship(2), [8, 7]);

player2.gameboard.placeShip(new Ship(5), [0, 0], "h");
player2.gameboard.placeShip(new Ship(4), [8, 0], "v");
player2.gameboard.placeShip(new Ship(3), [4, 9]);
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
};
