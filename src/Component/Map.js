/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React, { useState } from "react";
import PropTypes from "prop-types";
import MapGL, { Marker } from "react-map-gl";

import { TOKEN } from "../utilities";
import PolylineOverlay from "./PolylineOverlay";
import { minuteToHour } from "../calculation";

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

export default function Map({
  viewport,
  handleViewportChange,
  location,
  points,
  duration,
  loadingTime
}) {
  const [classOfCtrlZoom, setClassOfCtrlZoom] = useState("none");
  const mapRef = React.createRef();
  const durationAt = points[[parseInt(points.length / 2, 10)]];
  const durationInHour = minuteToHour(duration);
  const loadingTimeInHour = minuteToHour(loadingTime);
  const timeInTotal = minuteToHour(duration + loadingTime * 2);

  return (
    <div id="map-container">
      <div className="time-in-total-position">
        {loadingTime ? (
          <span className="time-in-total">Time in Total: {timeInTotal}</span>
        ) : null}
        <div className={classOfCtrlZoom}>Press Ctrl to Zoom In</div>
      </div>

      <div
        id="map"
        onMouseOver={() => setClassOfCtrlZoom("ctrl-zoom")}
        onMouseOut={() => setClassOfCtrlZoom("none")}
      >
        <MapGL
          ref={mapRef}
          {...viewport}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/zachzwy/cj1gxz24v001d2so0hxzi16zw"
          onViewportChange={viewport => handleViewportChange(viewport)}
          mapboxApiAccessToken={TOKEN}
        >
          {!location.from ? null : (
            <Marker
              latitude={location.from.latitude}
              longitude={location.from.longitude}
            >
              <div className="pin">&#10514;</div>
            </Marker>
          )}

          {!location.to ? null : (
            <>
              <PolylineOverlay points={points} />
              <Marker
                latitude={location.to.latitude}
                longitude={location.to.longitude}
              >
                <div className="pin">&#10515;</div>
              </Marker>
              <Marker
                latitude={durationAt ? durationAt[1] : 0}
                longitude={durationAt ? durationAt[0] : 0}
              >
                <div className="duration">{`Driving: ${durationInHour}`}</div>
              </Marker>
            </>
          )}

          {location.to && loadingTime ? (
            <>
              <Marker
                latitude={location.from.latitude}
                longitude={location.from.longitude}
              >
                <div className="loading">{`Loading: ${loadingTimeInHour}`}</div>
              </Marker>
              <Marker
                latitude={location.to.latitude}
                longitude={location.to.longitude}
              >
                <div className="unloading">{`Unloading: ${loadingTimeInHour}`}</div>
              </Marker>
            </>
          ) : null}
        </MapGL>
      </div>
    </div>
  );
}

Map.propTypes = {
  viewport: PropTypes.object.isRequired,
  handleViewportChange: PropTypes.func.isRequired,
  location: PropTypes.object,
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number).isRequired)
    .isRequired,
  duration: PropTypes.number,
  loadingTime: PropTypes.number
};
