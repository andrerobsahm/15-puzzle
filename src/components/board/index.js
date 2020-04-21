import React from "react";
import Tile from "../tile";
import "./styles.scss";

function Board({ tiles }) {
  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile
          key={tile.id}
          data-index={index}
          id={tile.id}
          empty={tile.id === tile.empty ? true : false}
          rightPos={tile.id === index ? true : false}
        />
      ))}
    </div>
  );
}

export default Board;
