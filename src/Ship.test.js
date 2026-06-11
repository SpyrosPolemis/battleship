import { experiments } from "webpack";
import { Ship } from "./Ship";

describe("Ship", () => {
  beforeEach(() => {
    myShip = new Ship(3);
  });

  it("creates a ship with length 3", () => {
    expect(myShip.length).toBe(3);
    expect(myShip.isSunk()).toBe(false);
  });

  it("marks a hit", () => {
    myShip.markHit();
    expect(myShip.timesHit).toBe(1);
  });

  it("sinks", () => {
    myShip.markHit();
    myShip.markHit();
    myShip.markHit();
    expect(myShip.isSunk()).toBe(true);
    expect(myShip.timesHit).toEqual(myShip.length);
  });
});
