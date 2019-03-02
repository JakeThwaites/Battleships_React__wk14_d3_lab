import PubSub from "../helpers/PubSub.js";

class Game {
  constructor(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
    this.playerPicks = [];
    this.computerPicks = [];
    this.currentPlayer = player1;
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
      const result = this.currentPlayer.checkIfHit(squareID);
      this.playerPicks.push(squareID);
      PubSub.publish("Game:clickProcessed", result);
      if (this.isWon()) {
        PubSub.publish("Game:gameWon", true);
      }
    }
  }

  changeTurn(){
    if (this.currentPlayer === this.player1) {
      this.currentPlayer = this.player2;
    }
    else {
      this.currentPlayer = this.player1;
    }
  }

  computerTurn(){
    //TODO get computer to select random square on 2nd grid
    const grid = document.getElementById("second-grid");
    const randomSquareChoice = Math.floor(Math.random() * this.computerPicks.length) + 1 ;

  }

  isWon(){
    return this.currentPlayer.ships.length === 0;
  }
}

export default Game;
