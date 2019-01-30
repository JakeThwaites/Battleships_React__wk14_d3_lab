import PubSub from "../helpers/PubSub.js";

class Game {
  constructor(player){
    this.player = player;
    this.playerPicks = [];
  }

  bindEvents(){
    PubSub.subscribe("GameContainer:click", (event) => {
      this.processClick(event.detail);
    })
  }

  processClick(squareID){
    if (this.playerPicks.includes(squareID)) {
      PubSub.publish("Game:clickProcessed", null);
    } else {
      const result = this.player.checkIfHit(squareID);
      this.playerPicks.push(squareID);
      PubSub.publish("Game:clickProcessed", result);
    }
  }

  isWon(){
    return this.player.ships.length === 0;
  }
}

export default Game;
