
class Ship {
  constructor(){
    this.squareIDs = [1,2,3];

  }

  isHit(clickID){
    for (var i = 0; i < this.squareIDs.length; i++) {
      if (this.squareIDs[i] === clickID) {
        this.squareIDs.splice(i, 1);
        return true
      }
    }
    return false;
  }

}

module.exports = Ship;
