import React, { useState, useEffect } from "react";
import Board from "./components/board";
import Header from "./components/header";
import initTileOrder from "./orderTiles";
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
        <Board tiles={tiles} />
      </section>
      <button onClick={() => setTiles(initTileOrder())}>Shuffle board</button>
    </div>
  );
}

export default App;
