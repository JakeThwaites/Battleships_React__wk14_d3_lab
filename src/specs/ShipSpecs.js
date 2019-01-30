const assert = require('assert');
const Ship = require('../models/Ship.js');

describe('ship', function(){
  beforeEach(function(){
    ship = new Ship();
  })

  it('should have an array of positions', function(){
    assert.deepStrictEqual(3, ship.squareIDs.length)
  })

  it('should detect a hit', function(){
    assert.strictEqual(true, ship.isHit(1));
  })

  it('should detect a miss', function(){
    assert.strictEqual(false, ship.isHit(10));
  })
})
