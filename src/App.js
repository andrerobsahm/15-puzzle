import React, { useState, useEffect } from "react";
import Board from "./components/board";
import Header from "./components/header";
import initTileOrder from "./orderTiles";
import { COLS, ROWS } from "./orderTiles";
import "./app.scss";

function App() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    setTiles(initTileOrder());
  }, []);

  return (
    <div className="app">
      <Header title="15 Puzzle" />
      <section className="board-container">
        <Board
          cols={COLS}
          rows={ROWS}
          tiles={tiles}
          shuffle={() => setTiles(initTileOrder())}
        />
      </section>
      <button onClick={() => setTiles(initTileOrder())}>Shuffle board</button>
    </div>
  );
}

export default App;
