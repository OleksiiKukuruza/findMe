import React, { Component } from 'react';
import { Drawer, MenuItem } from 'material-ui';
import { Link } from 'react-router';

export default class SideNav extends Component {
  render() {
    // TODO: remove when material-ui fix <span type="button"> issue
    const spanTypeButtonFix = { WebkitAppearance: 'none' };

    return (
      <Drawer docked={false}>
        <MenuItem style={spanTypeButtonFix} onTouchTap={this.props.handleClose}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem style={spanTypeButtonFix} onTouchTap={this.props.handleClose}>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem style={spanTypeButtonFix} onTouchTap={this.props.handleClose}>
          <Link to="/location">Location</Link>
        </MenuItem>
      </Drawer>
    );
  }
}
