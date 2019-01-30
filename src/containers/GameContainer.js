import React, {Component, Fragment} from 'react';
import ComputerInfo from "../components/ComputerInfo.js";
import GameGrid from "../components/GameGrid.js";
import PlayerInfo from "../components/PlayerInfo.js";

class GameContainer extends Component {

  render(){
    return (
      <Fragment>
      <h2>Jake and Paul's Awesome Skirmish Vessels</h2>
      <GameGrid />
      <ComputerInfo />
      <GameGrid />
      <PlayerInfo />
      </Fragment>
    );
  }
}


export default GameContainer;
