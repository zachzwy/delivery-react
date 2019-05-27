/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from './Form';
import Map from './Map';
import { FlyToInterpolator } from 'react-map-gl';
import WebMercatorViewport from 'viewport-mercator-project';

class Info extends React.Component {
  state = {
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

    classOfFrom: '',
    classOfTo: 'none',
    classOfItem: 'none',
    classOfDate: 'none',
    classOfCustomizedDate: 'none',
    classOfName: 'none',
    classOfSubmit: 'none',
    classOfNext: 'none',
    classOfAfterSubmit: 'none',

    externalData: null,
    viewport: {
      zoom: 12,
      latitude: 37.788,
      longitude: -122.417,
      bearing: 0,
      pitch: 0,
    },
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
      classOfNext: this.state.classOfSubmit === 'none' ? 'next' : 'none',
    });

    if (name === 'from') {
      if (value === '') {
        this.setState({
          externalData: null,
        });
      } else {
        this._loadAsyncData(this.state.from);
      }
    }
  }

  handleSelectionChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
    if (name === 'item') {
      this.setState({
        classOfDate: '',
      });
    } else if (name === 'dateOption') {
      this.setState({
        classOfName: '',
        classOfCustomizedDate: value === 'none-works' ? '' : this.state.classOfCustomizedDate,
      });
    }
  }

  handleKeyPress = e => {
    const name = e.target.name;
    const value = e.target.value;
    if ( value !== '' && e.key === 'Enter') {
      if (name === 'from') {
        this.setState({
          classOfTo: '',
        });
        this.updateMap();
      } else if (name === 'to') {
        this.setState({
          classOfItem: '',
        });
      } else if (name === 'phone' || name === 'firstName' || name === 'lastName') {
        this.setState({
          classOfSubmit: '',
          classOfNext: 'none',
        });
      }
    }
  }

  handleClickSubmit = e => {
    this.setState({
      classOfFrom: 'none',
      classOfTo: 'none',
      classOfItem: 'none',
      classOfDate: 'none',
      classOfCustomizedDate: 'none',
      classOfName: 'none',
      classOfSubmit: 'none',
      classOfNext: 'none',
      classOfAfterSubmit: '',
    });
  }

  handleSubmit = e => {
    e.preventDefault();
  }

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport },
    });
  }

  updateMap = () => {
    const place = this.state.externalData[0];
    if (place === null) return;
    const [minLng, minLat, maxLng, maxLat] = place.bbox ? place.bbox : [place.center[0] - 0.001, place.center[1] - 0.001, place.center[0] + 0.001, place.center[1] - 0.001];
    const viewport = new WebMercatorViewport(this.state.viewport);
    const { longitude, latitude, zoom } = viewport.fitBounds(
      [[minLng, minLat], [maxLng, maxLat]],
      {padding: 40}
    );
    this.setState({
      viewport: {
        ...this.state.viewport,
        zoom: zoom,
        latitude: latitude,
        longitude: longitude,
        transitionInterpolator: new FlyToInterpolator(),
        transitionDuration: 3000,
      },
    });
  }

  _loadAsyncData = from => {
    if (from === '') return;
    const queryFrom = from.replace(/\s/g, '%20');
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${queryFrom}.json?access_token=pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g`;
    this._asyncRequest = fetch(url).then(
      response => response.json()
    ).then(
      data => {
        this._asyncRequest = null;
        this.setState({
          externalData: data.features,
        });
      }
    );
  }

  render() {
    const fromDataList = this.state.externalData && this.state.externalData.map(item => item.place_name);

    return (
      <div id="info">
        <Map
          viewport={this.state.viewport}
          handleViewportChange={this.handleViewportChange}
        />
        <Form
          from={this.state.from}
          to={this.state.to}
          item={this.state.item}
          dateOption={this.state.dateOption}
          date={this.state.date}
          timeStart={this.state.timeStart}
          timeEnd={this.state.timeEnd}
          quote={this.state.quote}
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phone={this.state.phone}

          classOfFrom={this.state.classOfFrom}
          classOfTo={this.state.classOfTo}
          classOfItem={this.state.classOfItem}
          classOfDate={this.state.classOfDate}
          classOfCustomizedDate={this.state.classOfCustomizedDate}
          classOfName={this.state.classOfName}
          classOfSubmit={this.state.classOfSubmit}
          classOfNext={this.state.classOfNext}
          classOfAfterSubmit={this.state.classOfAfterSubmit}

          handleChange={this.handleChange}
          handleSelectionChange={this.handleSelectionChange}
          handleKeyPress={this.handleKeyPress}
          handleClickSubmit={this.handleClickSubmit}
          handleSubmit={this.handleSubmit}

          fromDataList={fromDataList}
        />
      </div>
    );
  }
}

export default Info;
