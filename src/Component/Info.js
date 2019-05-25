/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Form from './Form';
import Map from './Map';

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

    queryFrom: '',
    queryTo: '',

    classOfFrom: '',
    classOfTo: 'none',
    classOfItem: 'none',
    classOfDate: 'none',
    classOfCustomizedDate: 'none',
    classOfName: 'none',
    classOfSubmit: 'none',
    classOfNext: 'none',
    classOfAfterSubmit: 'none',
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value,
      classOfNext: this.state.classOfSubmit === 'none' ? 'next' : 'none',
    });
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
          queryFrom: value,
          classOfTo: '',
        });
      } else if (name === 'to') {
        this.setState({
          queryTo: value,
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

  render() {
    return (
      <div id="info">
        
        <Map
          queryFrom={this.state.queryFrom}
          queryTo={this.state.queryTo}
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
        />
      </div>
    );
  }
}

export default Info;