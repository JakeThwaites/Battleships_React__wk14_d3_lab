import React, {Component} from 'react';
import GridSquare from './GridSquare.js';

class GameGrid extends Component {

  // populateRows(){
  //   const grid = getElementById("game-grid");

  //
  // }

  render(){
    const squares = [];
    for (var i = 0; i < 100; i++) {
      squares.push(<GridSquare squareId={i}/>);
    }

    return (
      <div className="game-grid">{squares}</div>
    );
  }
}

export default GameGrid;
