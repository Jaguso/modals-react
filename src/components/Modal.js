import React, { Component } from 'react';

class Modal extends Component {
  render() {
    let modal = (
      <div>
        <p>This is a modal</p>
        <button>close</button>
      </div>
    );

    if (!this.props.isOpen) {
      modal = null;
    }

    return (
      <div>
        {modal}
      </div>
    );
  }
}

export default Modal;