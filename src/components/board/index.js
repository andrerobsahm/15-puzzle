import React, { useState } from "react";
import Tile from "../tile";
import "./styles.scss";

function Board({ tiles }) {
  // eslint-disable-next-line
  const [newTiles, setNewTiles] = useState([]);

  const swapTiles = (newTiles, index_a, index_b) => {
    let a = index_a.dataset.index;
    let b = index_b.dataset.index;
    let list = tiles;
    var temp = list[a];
    list[a] = list[b];
    list[b] = temp;
    setNewTiles([...list]);
  };

  function movableTiles(e, tiles) {
    let target = e.target;
    let empty = document.querySelector(".tile-empty");

    const gridGap = 10;

    let targetedTile = target.getBoundingClientRect();
    let emptyTile = empty.getBoundingClientRect();

    let tl = Math.round(targetedTile.left - gridGap);
    let tr = Math.round(targetedTile.right + gridGap);
    let tt = Math.round(targetedTile.top - gridGap);
    let tb = Math.round(targetedTile.bottom + gridGap);

    let el = Math.round(emptyTile.left);
    let et = Math.round(emptyTile.top);
    let er = Math.round(emptyTile.right);
    let eb = Math.round(emptyTile.bottom);

    const x = targetedTile.x === emptyTile.x;
    const y = targetedTile.y === emptyTile.y;

    if (tl === er && (x || y)) {
      swapTiles(tiles, target, empty);
    } else if (tr === el && (x || y)) {
      swapTiles(tiles, target, empty);
    } else if (tt === eb && (x || y)) {
      swapTiles(tiles, target, empty);
    } else if (tb === et && (x || y)) {
      swapTiles(tiles, target, empty);
    } else {
      return;
    }
    // onCompletion(tiles);
  }

  // function onCompletion(list) {
  //   for (let i = 0; i < list.length; i++) {
  //     if (list[i] === list.id) {
  //       console.log(list.id);
  //       console.log("decending");
  //       return true;
  //     } else {
  //       console.log("not decending");
  //       return false;
  //     }
  //   }
  // }

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <Tile
          key={tile.id === tile.empty ? `tile-empty` : `tile-${tile.id}`}
          index={index}
          id={tile.id}
          empty={tile.id === tile.empty ? true : false}
          rightPos={tile.id === index ? true : false}
          handleclick={(e) => movableTiles(e, tile)}
        />
      ))}
    </div>
  );
}

export default Board;
