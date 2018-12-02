import React, { Component } from "react";

import "./index.css";

export default class Modal extends Component {
  state = {
    modal: false
  };

  handleClick = () => {
    this.setState(prevState => {
      return {
        modal: !prevState.modal
      };
    });
  };

  render() {
    return (
      <div className="modal-container">
        <button type="button" name="button" className="modal-btn">
          <i className="material-icons md-14" onClick={this.handleClick}>
            info_outline
          </i>
        </button>

        <dialog className="modal-about" open={this.state.modal}>
          <button type="button" name="button" className="modal-cancel">
            <i className="material-icons sm-12" onClick={this.handleClick}>
              clear
            </i>
          </button>

          <h4 className="modal-title">TicTacToe</h4>
          <p className="modal-text">
            This is an Advanced Front End Developer project from the
            FreeCodeCamp. The user stories to be completed are:
            <ul className="user-stories">
              <li className="story">
                I can play a game of Tic Tac Toe with the computer.
              </li>
              <li className="story">
                My game will reset as soon as it's over so I can play again.
              </li>
              <li className="story">
                I can choose whether I want to play as X or O.
              </li>
            </ul>
          </p>
        </dialog>
      </div>
    );
  }
}
