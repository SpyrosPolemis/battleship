import { Gameboard } from "./Gameboard.js";

describe("Gameboard", () => {
  let gameboard;

  beforeEach(() => {
    gameboard = new Gameboard();
  });

  it("creates gameboard", () => {
    expect(gameboard).toBeTruthy();
  });
});
