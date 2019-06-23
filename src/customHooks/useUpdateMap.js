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
  const [points, setPoints] = useState([]);
  const [duration, setDuration] = useState();
  
  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  };
  
  const updateMap = (place, points) => {
    let minLng, minLat, maxLng, maxLat;
    // only has from
    if (place) {
      [minLng, minLat, maxLng, maxLat] = place.bbox ? place.bbox : [place.center[0] - 0.001, place.center[1] - 0.001, place.center[0] + 0.001, place.center[1] - 0.001];
    }  else {
      // has both
      minLng = Math.min(...points.map(point => point[0]));
      maxLng = Math.max(...points.map(point => point[0]));
      minLat = Math.min(...points.map(point => point[1]));
      maxLat = Math.max(...points.map(point => point[1]));
    }

    const nextViewport = new WebMercatorViewport(viewport);
    const { longitude, latitude, zoom } = nextViewport.fitBounds(
      [[minLng, minLat], [maxLng, maxLat]],
      {padding: 50}
    );
    setViewport({
      ...nextViewport,
      zoom: zoom,
      latitude: location.from ? latitude : place.center[1],
      longitude: location.from ? longitude : place.center[0],
      transitionInterpolator: new FlyToInterpolator(),
      transitionDuration: 3000,
    });
  };

  const getDirection = (pointA, pointB) => {
    const query = `${pointA.longitude},${pointA.latitude};${pointB.longitude},${pointB.latitude}`;
    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${query}?steps=true&access_token=pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const points = json.routes[0].legs[0].steps.map(step => step.intersections[0].location);
        setPoints(points);
        setDuration(Math.floor(json.routes[0].legs[0].duration / 60));
        updateMap(null, points);
      })
      .catch(e => console.log(e.message));
  };

  const handleUpdateMap = e => {
    const { name, value } = e.target;
    if (e.key === 'Enter' && value !== '') {
      if (name === 'from') {
        const place = dropdownDataFrom[0];
        setLocation({
          ...location,
          from: {
            longitude: place.center[0],
            latitude: place.center[1],
          }
        });
      
        if (location.to) {  // if user already enters the to input
          getDirection({  // getDirection will handle updateMap
            longitude: place.center[0],
            latitude: place.center[1],
          }, location.to);
        } else {
          updateMap(place, null);
        }

      } else if (name === 'to') {
        const place = dropdownDataTo[0];
        setLocation({
          ...location,
          to: {
            longitude: place.center[0],
            latitude: place.center[1],
          }
        });
        getDirection(location.from, {
          longitude: place.center[0],
          latitude: place.center[1],
        });
      }
    }
  };

  return {
    viewport,
    handleViewportChange,
    handleUpdateMap,
    location,
    points,
    duration
  };
}
