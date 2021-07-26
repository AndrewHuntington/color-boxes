import React, { Component } from "react";
import { randomIndex } from "./helpers";
import "./ColorSquare.css";

class ColorSquare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colors = this.props.colorList;
    const oldColor = this.state.color;
    const newColor = colors[randomIndex(colors.length)];

    if (oldColor !== newColor) {
      this.setState({ color: newColor });
    } else {
      this.changeColor();
    }
  }

  render() {
    return (
      <div
        className="ColorSquare"
        style={{ backgroundColor: this.state.color }}
        onClick={this.changeColor}
      ></div>
    );
  }
}

export default ColorSquare;
