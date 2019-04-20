import React, { Component } from 'react';
import './App.css';

import Modal from './components/Modal';
import SimpleForm from './components/SimpleForm';
import ModalTwo from './components/ModalTwo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
      show: false,
      name: '',
      email: ''
    }
  }

  handleClick = () => {
    this.setState({
      isOpen: true
    });
  }

  onChangeInput = (event) => {
    const {name, value} = event.target
    console.log("Valores: ", name, value)
    this.setState({[name]: value})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      show: true
    });
  }


  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Open</button>
        <Modal isOpen={this.state.isOpen} 
          onClose={() => this.setState({isOpen: false})}/>
        <SimpleForm
          onChangeInput={this.onChangeInput}
          onSubmit={this.onSubmit}
          name={this.state.name}
          email={this.state.email}
        />
        <p>Name: { this.state.show ?  this.state.name : null }</p>
        <p>Email: { this.state.show ? this.state.email : null }</p>
        <ModalTwo/>
      </div>
    );
  }
}

export default App;
