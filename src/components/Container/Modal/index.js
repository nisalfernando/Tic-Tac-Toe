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
      </div>
    );
  }
}
