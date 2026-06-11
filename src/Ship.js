export class Ship {
  constructor(length) {
    this.length = length;
    this.timesHit = 0;
  }

  markHit() {
    this.timesHit++;
  }

  isSunk() {
    if (this.timesHit >= this.length) {
      return true;
    }
    return false;
  }
}
// test
