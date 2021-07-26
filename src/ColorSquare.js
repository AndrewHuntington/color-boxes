import React, { Component } from "react";
import "./ColorSquare.css";

class ColorSquare extends Component {
  constructor(props) {
    super(props);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleChangeColor() {
    this.props.changeColor();
  }

  render() {
    return (
      <div
        className="ColorSquare"
        style={{ backgroundColor: this.props.color }}
        onClick={this.handleChangeColor}
      ></div>
    );
  }
}

export default ColorSquare;
