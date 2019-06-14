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

  const { viewport, handleViewportChange, handleUpdateMap} = useUpdateMap(dropdownDataFrom, dropdownDataTo);

  return (
    <div id="info">
      <Map
        viewport={viewport}
        handleViewportChange={handleViewportChange}
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
