import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="text-center">
          {this.props.title}
        </h1>
      </div>
    );
  }
}

export default Header;