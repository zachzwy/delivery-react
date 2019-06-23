import React from 'react';

import useForm from '../customHooks/useForm';
import useUiState from '../customHooks/useUiState';
import useGeocoding from '../customHooks/useGeocoding';
import useUpdateMap from '../customHooks/useUpdateMap';
import Form from './Form';
import Map from './Map';

export default function Info() {

  const formBundle = useForm({
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

  const uiStateBundle = useUiState({
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

  const from = formBundle.inputs.from;
  const to = formBundle.inputs.to;
  const dropdownDataFrom = useGeocoding(from);
  const dropdownDataTo = useGeocoding(to);
  const dropdownDataFromList = dropdownDataFrom && dropdownDataFrom.map(item => item.place_name);
  const dropdownDataToList = dropdownDataTo && dropdownDataTo.map(item => item.place_name);

  const { viewport, handleViewportChange, handleUpdateMap, location, points, duration } = useUpdateMap(dropdownDataFrom, dropdownDataTo);

  const item = formBundle.inputs.item;
  let loadingTime;
  switch (item) {
    case 'size-i':
      loadingTime = 20;
      break;
    case 'size-ii':
      loadingTime = 40;
      break;
    case 'size-iii':
      loadingTime = 60;
      break;
    case 'size-iv':
      loadingTime = 120;
      break;
    default:
      loadingTime = null;
  }

  return (
    <div id="info">
      <Map
        viewport={viewport}
        handleViewportChange={handleViewportChange}
        location={location}
        points={points}
        duration={duration}
        loadingTime={loadingTime}
      />
      <Form
        {...formBundle}
        {...uiStateBundle}
        dropdownDataFromList={dropdownDataFromList}
        dropdownDataToList={dropdownDataToList}
        handleUpdateMap={handleUpdateMap}
      />
    </div>
  );
}
