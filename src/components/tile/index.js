import React, { Component } from "react";
import "./styles.scss";

class Tile extends Component {
  render() {
    const { id, index, empty, rightPos, handleclick } = this.props;

    return (
      <div
        data-index={index}
        onClick={handleclick}
        className={`tile ${empty ? "tile-empty" : ""} ${
          rightPos ? "tile-success" : ""
        }`}
      >
        {id + 1}
      </div>
    );
  }
}

export default Tile;
