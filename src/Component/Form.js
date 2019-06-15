/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';

import Progress from './Progress';

export default function Form({
  inputs,
  handleChange,
  handleSubmit,

  uiState,
  handleKeyPressForUi,
  handleSelectionChangeForUi,
  handleClickSubmit,

  dropdownDataFromList,
  dropdownDataToList,
  handleUpdateMap,
}) {
  let count = 0;
  const { classOfTo, classOfItem, classOfDate, classOfName, classOfSubmit } = uiState;
  const countList = [classOfTo, classOfItem, classOfDate, classOfName, classOfSubmit];
  for (let item of countList) {
    if (item === 'active') {
      count++;
    }
  }
  const width = count / 5;

  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <Progress width={width} classOfProgress={uiState.classOfProgress}/>
        <label className={uiState.classOfFrom}>
          I WANT TO MOVE FROM:
          <br />
          <datalist id="dropdownDataFromList">
            {dropdownDataFromList && dropdownDataFromList.map(item => <option key={item} value={item} />)}
          </datalist>
          <input
            type="text"
            name="from"
            value={inputs.from}
            placeholder="Pick up location..."
            list="dropdownDataFromList"
            onChange={handleChange}
            onKeyPress={e => {
              handleKeyPressForUi(e);
              handleUpdateMap(e)
            }}
            autoComplete='off'
            required
          />
        </label>
        <label className={uiState.classOfTo}>
          I WANT TO MOVE TO:
          <br />
          <datalist id="dropdownDataToList">
            {dropdownDataToList && dropdownDataToList.map(item => <option key={item} value={item} />)}
          </datalist>
          <input
            type="text"
            name="to"
            value={inputs.to}
            placeholder="Drop off location..."
            list="dropdownDataToList"
            onChange={handleChange}
            onKeyPress={e => {
              handleKeyPressForUi(e);
              handleUpdateMap(e)
            }}
            autoComplete='off'
            required
          />
        </label>
        <label className={uiState.classOfItem}>
          I WANT TO MOVE:
          <br />
          <select
            name="item"
            id="item"
            onChange={e => {
              handleChange(e);
              handleSelectionChangeForUi(e);
            }}
          >
            <option value="default" defaultChecked>Choose Your Moving Item Size</option>
            <option value="size-i">Items that fit into a SUV</option>
            <option value="size-ii">Sofa, bed frame, etc</option>
            <option value="size-iii">Studio or one bedroom</option>
            <option value="size-iv">Larger than one bedroom</option>
          </select>
        </label>
        <label className={uiState.classOfDate}>
          I WANT TO MOVE ON:
          <br />
          <select
            name="dateOption"
            onChange={e => {
              handleChange(e);
              handleSelectionChangeForUi(e);
            }}
          >
            <option value="default" defaultChecked>Choose Your Moving Date</option>
            <option value="07/19/2019/0900AM-1200AM">07/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="07/19/2019/0900AM-1200AM">07/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="07/19/2019/0900AM-1200AM">07/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="07/19/2019/0900AM-1200AM">07/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="none-works">None works</option>
          </select>
        </label>
        <label className={uiState.classOfCustomizedDate}>
          NONE OF ABOVE WORKS. ADD MY AVAILABILITIES:
          <br />
          <input
            type="date"
            className="date"
            name="date"
            value={inputs.date}
            onChange={handleChange}
          />
          <span className="date-span">DATE:</span>
          <br />
          <input
            type="time"
            className="time-start"
            name="timeStart"
            value={inputs.timeStart}
            onChange={handleChange}
          />
          <span className="time-start-span">FROM:</span>
          <input
            type="time"
            className="time-end"
            name="timeEnd"
            value={inputs.timeEnd}
            onChange={handleChange}
          />
          <span className="time-end-span">TO:</span>
          <span id="quote">{inputs.quote}</span>
        </label>
        <label className={uiState.classOfName}>
          I AM:
          <br />
          <input
            type="text"
            className="name"
            name="firstName"
            value={inputs.firstName}
            placeholder="First name..."
            onChange={handleChange}
            onKeyPress={handleKeyPressForUi}
            required
          />
          <input
            type="text"
            name="lastName"
            className="name"
            value={inputs.lastName}
            placeholder="Last name..."
            onChange={handleChange}
            onKeyPress={handleKeyPressForUi}
            required
          />
          <input
            type="tel"
            name="phone"
            className="phone"
            value={inputs.phone}
            placeholder="Phone number..."
            onChange={handleChange}
            onKeyPress={handleKeyPressForUi}
            required
          />
        </label>
        <label className={uiState.classOfSubmit}>
          <input
            type="button"
            name="submit"
            className="submit"
            value="SUBMIT"
            onClick={handleClickSubmit}
          />
        </label>
        <label className={uiState.classOfNext}>
          {((uiState.classOfItem === '' || uiState.classOfDate === '') && uiState.classOfName === 'none') ? 'Select to move on' : 'Enter to move on'}
          <div className='next-ani'>&#8595;</div>
        </label>
      </form>
      <div className={uiState.classOfAfterSubmit}>
        <p id="thanks">{`THANKS, ${inputs.firstName.toUpperCase()}. WE WILL CONFIRM WITH YOU SHORTLY.`}</p>
      </div>
    </div>
  );
}
