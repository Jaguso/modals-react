import React, { Component } from 'react';

import Modal from './components/Modal';
import SimpleForm from './components/SimpleForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      isOpen: false,
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
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        
      </div>
    );
  }
}

export default App;
