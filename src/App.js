import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Container/Modal";
import Choose from "./components/Presentational/Choose";
import Board from "./components/Presentational/Board";
import Team from "./components/Presentational/Team";
import Result from "./components/Presentational/Result";
import Footer from "./components/Presentational/Footer";

class App extends Component {
  state = {
    player: "",
    computer: "",
    board: Array(9).fill(null),
    chosenTeam: false,
    gameOver: false,
    gameOverMsg: null
  };

  chooseTeam = (e) => {
    this.setState({
      player: e.target.innerHTML,
      computer: (e.target.innerHTML === 'X' ? 'O' : 'X'),
      chosenTeam: true
    });
  }

  getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }

  playerMove = (index) => {
    const newBoard = { ...this.state.board };
    newBoard[index] = this.state.player;
    this.setState({ board: newBoard }, () => {
      this.isGameOver(this.state.board, this.state.player);
    });
  }

  computerMove = () => {
    const emptyCells = Object.defineProperties(this.state.board)
      .filter(element => element[1] == null)
      .map(element => element[0]);
    const computerChoice = emptyCells[this.getRandomInt(emptyCells.length)];
    const newerBoard = { ...this.state.board }
    newerBoard[computerChice] = this.state.computer;
    setTimeout(() => {
      this.setState({ board: newerBoard })
    }, 500);
  }

  isGameOver = (board, team) => {
    if (
      // Horrizontal
      (board[0] === team && board[1] === team && board[2] === team) ||
      (board[3] === team && board[4] === team && board[5] === team) ||
      (board[6] === team && board[7] === team && board[8] === team) ||
      // Vertical
      (board[0] === team && board[3] === team && board[6] === team) ||
      (board[1] === team && board[4] === team && board[7] === team)
    )
  }
}
