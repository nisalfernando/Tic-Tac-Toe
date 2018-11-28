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
        <button type="button" name="button" className="modal-btn" />
          <i className="material-icons md-14" onClick={this.handleClick}>info_outline</i>
        </button>

        <dialog className="modal-about" open={this.state.modal}>
          <button type="button" name="button" className="modal-cancel"></button>

        </dialog>
      </div>)
    );
  }
}
