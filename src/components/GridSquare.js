import React, {Component} from 'react';

class GridSquare extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    const squareId = event.target.value;
    this.props.clickHandler(squareId);
  }

  render(){
    // const isClickable = this.props.clickable === "true" ? "" : "disabled";
    // let button = <button></button>
    if (this.props.isClickable == "true") {
      return (
        <button onClick={this.handleClick} value={this.props.squareId}></button>
      );
    } else
      return( <button disabled></button>);
  }
}

export default GridSquare;
