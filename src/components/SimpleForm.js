import React, { Component } from 'react';

class SimpleForm extends Component {
  render() {
    return(
      <div>
        <form onSubmit={this.props.onSubmit}> 
          <input
            type="text"
            name="name"
            value={this.props.name}
            onChange={this.props.onChangeInput}
            placeholder="name"
          />
          <input
            type="text"
            name="email"
            value={this.props.email}
            onChange={this.props.onChangeInput}
            placeholder="email"
          />

          <button type="submit">add</button>
        </form>
      </div>
    );
  }
}

export default SimpleForm;