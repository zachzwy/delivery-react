/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';

class Map extends React.Component {
  render() {
    return (
      <div id="map-container">
        <div id="map">
          <p>Search query from: {this.props.queryFrom}</p>
          <p>Search query to: {this.props.queryTo}</p>
        </div>
      </div>
    );
  }
}

export default Map;
