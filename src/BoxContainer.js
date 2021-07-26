import React, { Component } from "react";
import ColorSquare from "./ColorSquare";
import "./BoxContainer.css";
import { randomIndex } from "./helpers";

//TODO:
// Move all state changing logic from child to parent

class BoxContainer extends Component {
  static defaultProps = {
    colors: [
      "green",
      "blue",
      "red",
      "yellow",
      "orange",
      "pink",
      "purple",
      "gold",
      "silver",
      "brown",
      "black",
      "white",
      "gray",
      "turquoise",
      "tan",
      "wheat",
      "violet",
      "peru",
      "lightgreen",
      "lightblue",
      "lightgrey",
      "lemonchiffon",
      "honeydew",
      "indigo",
      "goldenrod",
      "indianred",
      "hotpink",
      "khaki",
      "darkolivegreen",
      "darkblue",
      "darkcyan",
      "darkmagenta",
      "darkorange",
      "coral",
      "chocolate",
    ],
    numOfSquares: 18,
  };

  constructor(props) {
    super(props);
    this.state = {
      color: null,
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const colors = this.props.colors;
    const oldColor = this.state.color;
    const newColor = colors[randomIndex(colors.length)];

    if (oldColor !== newColor) {
      this.setState({ color: newColor });
    } else {
      this.changeColor();
    }
  }

  render() {
    const numOfColors = this.props.colors.length;
    const squares = Array.from({ length: this.props.numOfSquares }).map(
      (e, i) => {
        const color = this.props.colors[randomIndex(numOfColors)];
        return (
          <ColorSquare key={i} color={color} changeColor={this.changeColor} />
        );
      }
    );
    return <div className="BoxContainer">{squares}</div>;
  }
}

export default BoxContainer;
