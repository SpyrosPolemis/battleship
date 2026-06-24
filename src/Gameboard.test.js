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
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, [0, 1])).toBeTruthy();
    expect(gameboard.board[0][1].ship).toBe(ship);
    expect(gameboard.board[1][1].ship).toBe(ship);
    expect(gameboard.board[2][1].ship).toBe(ship);
  });

  it("places vertical ship correctly", () => {
    const ship = new Ship(3);
    expect(gameboard.placeShip(ship, [0, 1], "v")).toBeTruthy();
    expect(gameboard.board[0][1].ship).toBe(ship);
    expect(gameboard.board[0][2].ship).toBe(ship);
    expect(gameboard.board[0][3].ship).toBe(ship);
  });

  it("handles ship overlap", () => {
    expect(gameboard.placeShip(new Ship(3), [3, 4])).toBeFalsy();
  });

  it("handles ship overflow", () => {
    expect(gameboard.placeShip(new Ship(3), [7, 4])).toBeFalsy();
  });
});
