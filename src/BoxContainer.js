import React, { Component } from "react";
import ColorSquare from "./ColorSquare";
import "./BoxContainer.css";
import { randomIndex } from "./helpers";

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

  render() {
    const numOfColors = this.props.colors.length;
    const squares = Array.from({ length: this.props.numOfSquares }).map(() => (
      <ColorSquare
        color={this.props.colors[randomIndex(numOfColors)]}
        colorList={this.props.colors}
      />
    ));
    return <div className="BoxContainer">{squares}</div>;
  }
}

export default BoxContainer;
