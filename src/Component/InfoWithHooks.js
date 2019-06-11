import React, { useState } from 'react';
import { FlyToInterpolator } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';

import useForm from '../customHooks/useForm';
import FormWithHooks from './FormWithHooks';
import Map from './Map';

export default function InfoWithHooks() {

  const { inputs, handleChange, handleSubmit } = useForm({
    from: '',
    to: '',
    item: '',
    dateOption: '',
    date: '',
    timeStart: '',
    timeEnd: '',
    quote: '$30-60',
    firstName: '',
    lastName: '',
    phone: '',
  });
  const [uiState, setUiState] = useState({
    classOfFrom: '',
    classOfTo: 'none',
    classOfItem: 'none',
    classOfDate: 'none',
    classOfCustomizedDate: 'none',
    classOfName: 'none',
    classOfSubmit: 'none',
    classOfNext: 'next',
    classOfAfterSubmit: 'none',
  });
  const [viewport, setViewport] = useState({
    zoom: 12,
    latitude: 37.788,
    longitude: -122.417,
    bearing: 0,
    pitch: 0,
  });
  const [externalData, setExternalData] = useState(null);

  const handleKeyPress = e => {
    const { name, value } = e.target;
    if (value !== '' && e.key === 'Enter') {
      switch (name) {
        case 'from':
          setUiState({ ...uiState, classOfTo: '' });
          return;
        case 'to':
          setUiState({ ...uiState, classOfItem: '' });
          return;
        case 'firstName' || 'lastName' || 'phone':
          setUiState({ ...uiState, classOfSubmit: '', classOfNext: 'none' });
          return;
        default:
          return;
      }
    }
  };

  const handleSelectionChange = e => {
    handleChange(e);
    const { name, value } = e.target;
    switch (name) {
      case 'item':
        setUiState({ ...uiState, classOfDate: '' });
        return;
      case 'dateOption':
        setUiState({
          ...uiState,
          classOfName: '',
          classOfCustomizedDate: value === 'none-works' ? '' : 'none',
        });
        return;
      default:
        return;
      }
  };

  const handleViewportChange = newViewport => {
    setViewport({ ...viewport, ...newViewport });
  }

  const fromDataList = externalData && externalData.map(item => item.place_name);

  return (
    <div id="info">
      <Map
        viewport={viewport}
        handleViewportChange={handleViewportChange}
      />
      <FormWithHooks
        inputs={inputs}
        uiState={uiState}
        handleChange={handleChange}
        handleSelectionChange={handleSelectionChange}
        handleSubmit={handleSubmit}
        handleKeyPress={handleKeyPress}
        fromDataList={fromDataList}
      />
    </div>
  );
}
