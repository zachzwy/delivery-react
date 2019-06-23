/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MapGL, { Marker } from 'react-map-gl';

import PolylineOverlay from './PolylineOverlay';

import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const TOKEN = 'pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g';

export default function Map({ viewport, handleViewportChange, location, points, duration }) {
  const [classOfCtrlZoom, setClassOfCtrlZoom] = useState('none');
  const mapRef = React.createRef();

  const durationAt = points[[parseInt(points.length / 2, 10)]];

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
            </Marker>
          )}

          {!location.to ? null : (
            <>
              <PolylineOverlay points={points} />

              <Marker latitude={location.to.latitude} longitude={location.to.longitude}>
                <div className='pin'>&#10515;</div>
                <div className='unloading'>{`Unloading: ${duration} min`}</div>
              </Marker>

              <Marker latitude={location.from.latitude} longitude={location.from.longitude}>
                <div className='loading'>{`Loading: ${duration} min`}</div>
              </Marker>

              <Marker latitude={durationAt ? durationAt[1] : 0} longitude={durationAt ? durationAt[0] : 0}>
                <div className='duration'>{`Driving: ${duration} min`}</div>
              </Marker>
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
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired).isRequired
};


