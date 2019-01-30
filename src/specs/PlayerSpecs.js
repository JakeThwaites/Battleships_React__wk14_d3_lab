const assert = require('assert');
const Ship = require('../models/Ship.js');
const Player = require('../models/Player.js');

describe('ship', function(){
  let ship;
  let ship2;
  let ship3;
  let arrayOfShips;
  let player;

  beforeEach(function(){
    ship = new Ship([1,2,3]);
    ship2 = new Ship([8,9]);
    ship3 = new Ship([13]);
    arrayOfShips = [ship1, ship2, ship3];
    player = new Player(arrayOfShips);
  })

  
})
