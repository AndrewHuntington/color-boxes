import React, { Component } from "react";
import ColorSquare from "./ColorSquare";
import "./BoxContainer.css";

class BoxContainer extends Component {
  constructor(props) {
    super(props);
    this.randomIndex = this.randomIndex.bind(this);
  }

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
    ],
  };

  randomIndex() {
    return Math.floor(Math.random() * this.props.colors.length);
  }

  render() {
    return (
      <div className="BoxContainer">
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
        <ColorSquare color={this.props.colors[this.randomIndex()]} />
      </div>
    );
  }
}

export default BoxContainer;
