import React from 'react';
import { FlyToInterpolator } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';

import useForm from '../customHooks/useForm';
import Form from './Form';
import Map from './Map';

export default function InfoWithHooks() {
  const defaultInputs = {
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
  };

  const { inputs, handleChange, handleSubmit } = useForm(defaultInputs);

  return (
    <div id="info">
      <Form
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
