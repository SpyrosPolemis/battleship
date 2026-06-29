import "./styles.css";
import { gameDriver } from "./gameDriver.js";
import { uiController } from "./uiController.js";

const body = document.querySelector("body");

const startBtn = document.querySelector("button");
startBtn.addEventListener("click", () => {
  uiController.renderBoard(gameDriver.player1());
  uiController.renderBoard(gameDriver.player2());
  startBtn.remove();
});
