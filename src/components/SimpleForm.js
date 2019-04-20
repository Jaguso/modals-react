import React, { Component } from 'react';

class SimpleForm extends Component {
  render() {
    return(
      <div>
        <form>
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
        </form>
      </div>
    );
  }
}

export default SimpleForm;