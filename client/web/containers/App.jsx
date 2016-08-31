import React, { Component } from 'react';
import { AppBar } from 'material-ui';
import SideNav from './../components/SideNav';

export default class App extends Component {
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <SideNav handleClose={this.handleClose} />
        <AppBar title="Find Me" />
        {this.props.children}
      </div>
    );
  }
}
