import React, { Component } from "react";
import "./styles.scss";

class Tile extends Component {
  render() {
    const { id, empty, rightPos } = this.props;

    return (
      <article className="tile" className={`tile ${empty ? "tile-empty" : ""}`}>
        <span className={`tile-label ${rightPos ? "tile-success" : ""}`}>
          {id + 1}
        </span>
      </article>
    );
  }
}

export default Tile;
