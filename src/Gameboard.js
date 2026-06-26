export class Gameboard {
  constructor() {
    this.board = [];
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = { ship: null, hit: false };
      }
    }

    // Could also make this a method getMissedAttacks?
    this.missedAttacks = [];
    this.ships = [];
  }

  placeShip(ship, coords, orientation = "h") {
    if (!this.#checkShipFits(ship, coords, orientation)) {
      return false;
    }

    if (orientation === "h") {
      for (let i = coords[0]; i < coords[0] + ship.length; i++) {
        this.board[i][coords[1]].ship = ship;
      }
    }
    if (orientation === "v") {
      for (let i = coords[1]; i < coords[1] + ship.length; i++) {
        this.board[coords[0]][i].ship = ship;
      }
    }
    this.ships.push(ship);

    return true;
  }

  #checkShipFits(ship, coords, orientation) {
    /* return false if ship will overlaps existing ship or if it will overflow from board
    else return true */
    if (coords[0] > 9 || coords[0] < 0 || coords[1] > 9 || coords[1] < 0) {
      return false;
    }
    if (orientation === "h") {
      if (coords[0] + ship.length > 9) {
        return false;
      }
    }
    if (orientation === "v") {
      if (coords[1] + ship.length > 9) {
        return false;
      }
    }

    if (orientation === "h") {
      for (let i = coords[0]; i < coords[0] + ship.length; i++) {
        console.log("COORDS BITCH", coords);
        if (this.board[i][coords[1]].ship !== null) {
          return false;
        }
      }
    }

    if (orientation === "v") {
      for (let i = coords[1]; i < coords[1] + ship.length; i++) {
        if (this.board[coords[0]][i].ship !== null) {
          return false;
        }
      }
    }

    return true;
  }

  recieveAttack(x, y) {
    // input: a pair of numbers, x and y, as coordinates

    if (this.board[x][y].hit === true) {
      return;
    }

    this.board[x][y].hit = true;

    if (this.board[x][y].ship !== null) {
      this.board[x][y].ship.markHit();
    } else {
      this.missedAttacks.push([x, y]);
    }
  }

  checkAllSunk() {
    if (
      this.ships.some((ship) => {
        ship.sunk === false;
      })
    ) {
      return false;
    } else {
      return true;
    }
  }
}
