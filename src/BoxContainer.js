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
  };

  render() {
    const numOfColors = this.props.colors.length;
    return (
      <div className="BoxContainer">
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
        <ColorSquare
          color={this.props.colors[randomIndex(numOfColors)]}
          colorList={this.props.colors}
        />
      </div>
    );
  }
}

export default BoxContainer;
