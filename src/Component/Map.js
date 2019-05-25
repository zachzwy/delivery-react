/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjaW1ud3NibDUwMDJxdHNseTg0YmhqZ2Y4In0.6ztiUpw95A1LgQT-FGXkUw';
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw',
      center: [0.000000, 0.000000],
      zoom: 0.0,
    });
  }

  render() {
    return (
      <div id="map-container">
        <div id="map">
          {/* <p>Search query from: {this.props.queryFrom}</p>
          <p>Search query to: {this.props.queryTo}</p> */}
        </div>
      </div>
    );
  }
}

export default Map;
