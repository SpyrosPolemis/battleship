import "./styles.css";
import { gameDriver } from "./gameDriver.js";
import { uiController } from "./uiController.js";

const body = document.querySelector("body");

const player1Board = uiController.renderBoard(gameDriver.player1());

const player2Board = uiController.renderBoard(gameDriver.player2());

body.append(player1Board, player2Board);
