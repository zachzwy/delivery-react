/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MapGL from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import Geocoder from 'react-map-gl-geocoder';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

class Map extends React.Component {


  mapRef = React.createRef();

  // handleOnResult = e => {
  //   console.log(e.result);
  //   this.setState({
  //     searchResultLayer: new GeoJsonLayer({
  //       id: 'search-result',
  //       data: e.result.geometry,
  //       getFillColor: [255, 0, 0, 128],
  //       getRadius: 1000,
  //       pointRadiusMinPixels: 10,
  //       pointRadiusMaxPixels: 10,
  //     }),
  //   });
  // }

  render() {
    const { viewport, handleViewportChange } = this.props;
    return (
      <div id="map-container">
        <div id="map">
          <MapGL
            ref={this.mapRef}
            {...viewport}
            width='100%'
            height='100%'
            mapStyle='mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw'
            onViewportChange={viewport => handleViewportChange(viewport)}
            mapboxApiAccessToken={TOKEN}
          > 
          </MapGL>
        </div>
      </div>
    );
  }
}

export default Map;
