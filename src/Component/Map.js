/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import MapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

export default class Map extends React.Component {
  state = {
    classOfCtrlZoom: 'none',
  };

  mapRef = React.createRef();

  render() {
    const { viewport, handleViewportChange } = this.props;
    return (
      <div id="map-container">
        <span className={this.state.classOfCtrlZoom}>PRESS CTRL TO ZOOM IN</span>
        <div
          id="map"
          onMouseOver={() => this.setState({ classOfCtrlZoom: 'ctrl-zoom' })}
          onMouseOut={() => this.setState({ classOfCtrlZoom: 'none' })}
        >
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

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  handleViewportChange: PropTypes.func.isRequired,
};
