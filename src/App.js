import React, { Component } from 'react';

import Modal from './components/Modal';
import SimpleForm from './components/SimpleForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false
    }
  }

  handleClick = () => {
    this.setState({
      isOpen: true
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Open</button>
        <Modal isOpen={this.state.isOpen}/>
        <SimpleForm/>
      </div>
    );
  }
}

export default App;
