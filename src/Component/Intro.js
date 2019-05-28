import React from 'react';
import PropTypes from 'prop-types';

export default function Intro({ fullpageApi }) {
  return (
    <div id="intro">
      <p>EASY MOVE</p>
      <h1>We save your moving cost by pairing you with others and sharing Truck</h1>
      <button
        id="start-button"
        onClick={() => fullpageApi.moveSectionDown()}
      >START</button>
    </div>
  );
}

Intro.propTypes = {
  fullpageApi: PropTypes.object,
};
