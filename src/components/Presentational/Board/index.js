import React from "react";

import "./index.css";

export default function Board({ board, playerMove }) {
  return (
    <section className="board">
      <div className="square one" data-value="0" onClick={() => playerMove(0)}>
        <p className="element">{board[0]}</p>
      </div>
      <div className="square two" data-value="1" onClick={() => playerMove(1)}>
        <p className="element">{board[1]}</p>
      </div>
      <div class="square three" data-value="1" onClick={() => playerMove(2)}>
        <p className="element">{board[2]}</p>
      </div>
    </section>
  );
}
