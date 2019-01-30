const PubSub = require("../helpers/PubSub.js");

class Game {
  constructor(player){
    this.player = player;
    this.playerPicks = [];
  }

  processClick(squareID){
    if (this.playerPicks.includes(squareID)) {
      return null;
    }

    const result = this.player.checkIfHit(squareID);
    this.playerPicks.push(squareID);
    return result;
  }

  isWon(){
    return this.player.ships.length === 0;
  }
}

module.exports = Game;
