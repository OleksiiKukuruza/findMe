import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

export default class Location extends Component {
  static defaultProps = {
    center: { lat: 59.938043, lng: 30.337157 },
    zoom: 9
  };
  
  render() {
    const API_KEY = 'AIzaSyAe5IJKUNflOzXilyKErlps-RlNn-ws0lQ';
    return (
      <div style={{ height: '100vh' }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: API_KEY,
            language: 'ru'
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
      </div>
    );
  }
}
