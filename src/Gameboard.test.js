import { Gameboard } from "./Gameboard.js";
import { Ship } from "./Ship.js";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
    gameboard.placeShip(new Ship(3), [4, 4]);
  });

  it("creates gameboard", () => {
    expect(gameboard).toBeTruthy();
  });

  it("places horizontal ship correctly", () => {
    expect(gameboard.placeShip(new Ship(3), [0, 1])).toBeTruthy();
  });

  it("places vertical ship correctly", () => {
    expect(gameboard.placeShip(new Ship(3), [0, 1], "v")).toBeTruthy();
  });

  it("handles ship overlap", () => {
    expect(gameboard.placeShip(new Ship(3), [3, 4])).toBeFalsy();
  });

  it("handles ship overflow", () => {
    expect(gameboard.placeShip(new Ship(3), [7, 4])).toBeFalsy();
  });
});
