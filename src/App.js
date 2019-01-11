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
}
