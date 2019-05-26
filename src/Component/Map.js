/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MapGL, { Marker } from 'react-map-gl';

import CityPin from './CityPin';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

class Map extends React.Component {
  state = {
    viewport: {
      latitude: 37.783,
      longitude: -122.415,
      zoom: 12,
    },
  };

  render() {
    return (
      <div id="map-container">
        <div id="map">
          <MapGL
            {...this.state.viewport}
            width='100%'
            height='100%'
            mapStyle='mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw'
            onViewStateChange={viewport => this.setState({viewport})}
            mapboxApiAccessToken={TOKEN}
          >
            <Marker
              latitude={37.783}
              longitude={-122.415}
            >
              <CityPin size={20} />
            </Marker>
          </MapGL>
        </div>
      </div>
    );
  }
}

export default Map;
