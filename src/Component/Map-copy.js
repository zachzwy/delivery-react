/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
// import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
// import MapboxDirections from '@mapbox/mapbox-gl-directions/src/directions';
const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// const MapboxDirections = require('@mapbox/mapbox-gl-directions');

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

class Map extends React.Component {
  componentDidMount() {
    mapboxgl.accessToken = TOKEN;

    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw',
      center: [-122.415, 37.783],
      zoom: 12,
    });

    // const directions = new MapboxDirections({
    //   accessToken: TOKEN,
    //   unit: 'metric',
    //   profile: 'mapbox/cycling',
    // });

    // map.addControl(directions, 'top-left');
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
