/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';

import Pin from './Pin';
import PolylineOverlay from './PolylineOverlay';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

export default function Map({ viewport, handleViewportChange, location, points }) {
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

          {!location.from ? null : (
            <Marker latitude={location.from.latitude} longitude={location.from.longitude}>
              <div className='pin'>&#10514;</div>
              {/* <Pin /> */}
            </Marker>
          )}

          {!location.to ? null : (
            <>
              <Marker latitude={location.to.latitude} longitude={location.to.longitude}>
                <div className='pin'>&#10515;</div>
                {/* <Pin /> */}
              </Marker>

              <PolylineOverlay points={points} />
            </>
          )}




        </MapGL>
      </div>
    </div>
  );
}

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  handleViewportChange: PropTypes.func.isRequired,
};
