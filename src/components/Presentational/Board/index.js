import React from "react";

import "./index.css";

export default function Board({ board, playerMove }) {
  return (
    <section className="board">
      <div className="square one" data-value="0" onClick={() => playerMove(0)}>
        <p className="element">{board[0]}</p>
      </div>
    </section>
  );
}
