import React, {Component, Fragment} from 'react';
import ComputerInfo from "../components/ComputerInfo.js";
import GameGrid from "../components/GameGrid.js";
import PlayerInfo from "../components/PlayerInfo.js";
import PubSub from "../helpers/PubSub.js";

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(squareId){
    console.log(squareId);
  }

  render(){
    return (
      <Fragment>
      <h2>Jake and Paul's Awesome Skirmish Vessels</h2>
      <GameGrid containerClickHandler={this.handleClick} clickable="true"/>
      <ComputerInfo />
      <GameGrid clickable="false"/>
      <PlayerInfo />
      </Fragment>
    );
  }
}


export default GameContainer;
