/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from './node_modules/react';
import { useState } from './node_modules/react';
import PropTypes from './node_modules/prop-types';
import MapGL from './node_modules/react-map-gl';

import './node_modules/mapbox-gl/dist/mapbox-gl.css';
import './node_modules/react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

export default function Map({ viewport, handleViewportChange }) {
  const [classOfCtrlZoom, setClassOfCtrlZoom] = useState('none');
  const mapRef = React.createRef();

  return (
    <div id="map-container">
      <span className={classOfCtrlZoom}>PRESS CTRL TO ZOOM IN</span>
      <div
        id="map"
        onMouseOver={() => setClassOfCtrlZoom('ctrl-zoom')}
        onMouseOut={() => setClassOfCtrlZoom('none')}
      >
        <MapGL
          ref={mapRef}
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

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  handleViewportChange: PropTypes.func.isRequired,
};
