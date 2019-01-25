/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import style from './style.css';
// import proptypes from 'prop-types';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 10,
  };

  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.747331}
            lng={-73.851744}
            text="Kauno pilis"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
