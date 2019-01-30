const assert = require('assert');
// import Ship from './src/models/Ship.js';
const Ship = require('../models/Ship.js');

describe('ship', function(){
  beforeEach(function(){
    ship = new Ship();
  })

  it('should have an array of positions', function(){
    assert.deepStrictEqual(3, ship.squareIDs.length)
  })
})
