import React, {Component} from 'react';

class GridSquare extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.button = null;
  }

  handleClick(event){
    const squareId = event.target.value;
    this.props.clickHandler(squareId);
    let button = document.getElementById(this.button);
    button.setAttribute("disabled", true);
  }

  render(){

    let clickClass = "";
    if (this.props.clickValue === true){
      clickClass = "Hit";
    } else if (this.props.clickValue === false){
      clickClass = "Miss";
    }
    if (this.props.isClickable === "true") {
      this.button = this.props.squareId;
      return (
        <button
        onClick={this.handleClick}
        value={this.props.squareId}
        id={this.props.squareId}
        className={clickClass}
        ></button>
      );
    } else
      return( <button disabled></button>);
  }
}

export default GridSquare;
