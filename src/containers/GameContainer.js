import React, {Component, Fragment} from 'react';
import ComputerInfo from "../components/ComputerInfo.js";
import GameGrid from "../components/GameGrid.js";
import PlayerInfo from "../components/PlayerInfo.js";
import PubSub from "../helpers/PubSub.js";

class GameContainer extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      hashOfClicks: {}
    }
    this.currentClick = null;
    this.bindEvents();
  }

  bindEvents(){
    PubSub.subscribe("Game:clickProcessed", (event) => {
      const clickResult = event.detail;
      this.processResult(clickResult);
    })
  }

  processResult(clickResult){
    const currentClicks = this.state.hashOfClicks;
    currentClicks[this.currentClick] = clickResult;
    this.setState({hashOfClicks: currentClicks});
  }

  handleClick(squareId){
    this.currentClick = squareId;
    PubSub.publish("GameContainer:click", parseInt(squareId));
  }

  render(){
    return (
      <Fragment>
      <h2>Jake and Paul's Awesome Skirmish Vessels</h2>
      <GameGrid containerClickHandler={this.handleClick} currentClicks={this.state.hashOfClicks} clickable="true"/>
      <ComputerInfo />

      <PlayerInfo />
      </Fragment>
    );
  }
}


export default GameContainer;
