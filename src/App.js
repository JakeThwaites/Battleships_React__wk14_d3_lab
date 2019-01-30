import React, { Component } from 'react';
import GameContainer from './containers/GameContainer.js';
import Game from './models/Game.js';
import Ship from './models/Ship.js';
import Player from './models/Player.js';

class App extends Component {
  render() {
    const ship = new Ship([1,2,3]);
    const ship2 = new Ship([8,9]);
    const ship3 = new Ship([69,79,89, 99]);
    const arrayOfShips = [ship, ship2, ship3];
    const player = new Player(arrayOfShips);
    const game = new Game(player);
    game.bindEvents();
    return ( <GameContainer />
    );
  }
}

export default App;
