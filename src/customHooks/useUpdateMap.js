import { useState } from 'react';

import { FlyToInterpolator } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';

export default function useUpdataMap(dropdownDataFrom, dropdownDataTo) {

  const [location, setLocation] = useState({});
  const [viewport, setViewport] = useState({
    zoom: 12,
    latitude: 37.788,
    longitude: -122.417,
    bearing: 0,
    pitch: 0,
  });
  
  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  };
  
  const updateMap = place => {
    if (!place) return;
    const [minLng, minLat, maxLng, maxLat] = place.bbox ? place.bbox : [place.center[0] - 0.001, place.center[1] - 0.001, place.center[0] + 0.001, place.center[1] - 0.001];
    const nextViewport = new WebMercatorViewport(viewport);
    const { longitude, latitude, zoom } = nextViewport.fitBounds(
      [[minLng, minLat], [maxLng, maxLat]],
      {padding: 40}
    );
    setViewport({
      ...nextViewport,
      zoom: zoom,
      latitude: place.center[1],
      longitude: place.center[0],
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000,
    });
  };
  
  const handleUpdateMap = e => {
    const { name } = e.target;
    if (e.key === 'Enter') {
      if (name === 'from') {
        const place = dropdownDataFrom[0];
        setLocation({
          ...location,
          from: {
            longitude: place.center[0],
            latitude: place.center[1],
          }
        });
        updateMap(place);
        console.log('here');
      } else if (name === 'to') {
        const place = dropdownDataTo[0];
        setLocation({
          ...location,
          to: {
            longitude: place.center[0],
            latitude: place.center[1],
          }
        });
        updateMap(place);
      }
    }
  };

  return {
    viewport,
    handleViewportChange,
    handleUpdateMap,
    location,
  };
}
