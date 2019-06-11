/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

export default function Form({
  inputs,
  uiState,
  handleChange,
  handleSelectionChange,
  handleSubmit,
  handleKeyPress,
  fromDataList,
}) {
  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <label className={uiState.classOfFrom}>
          I WANT TO MOVE FROM:
          <br />
          <datalist id="fromDataList">
            {fromDataList && fromDataList.map(item => <option key={item} value={item} />)}
          </datalist>
          <input
            type="text"
            name="from"
            value={inputs.from}
            placeholder="Pick up location..."
            list="fromDataList"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={uiState.classOfTo}>
          I WANT TO MOVE TO:
          <br />
          <input
            type="text"
            name="to"
            value={inputs.to}
            placeholder="Drop off location..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={uiState.classOfItem}>
          I WANT TO MOVE:
          <br />
          <select name="item" id="item" onChange={handleSelectionChange}>
            <option value="default" defaultChecked>Choose Your Moving Item Size</option>
            <option value="size-i">Size i</option>
            <option value="size-ii">Size ii</option>
            <option value="size-iii">Size iii</option>
            <option value="size-iv">Size iv</option>
          </select>
        </label>
        <label className={uiState.classOfDate}>
          I WANT TO MOVE ON:
          <br />
          <select name="dateOption" onChange={handleSelectionChange}>
            <option value="default" defaultChecked>Choose Your Moving Date</option>
            <option value="05/19/2019/0900AM-1200AM">05/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="05/19/2019/0900AM-1200AM">05/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="05/19/2019/0900AM-1200AM">05/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
            <option value="05/19/2019/0900AM-1200AM">05/19/2019 ---------- 09:00AM - 12:OOAM ---------- $30</option>
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
            onKeyPress={handleKeyPress}
            required
          />
          <input
            type="text"
            name="lastName"
            className="name"
            value={inputs.lastName}
            placeholder="Last name..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
          <input
            type="tel"
            name="phone"
            className="phone"
            value={inputs.phone}
            placeholder="Phone number..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={uiState.classOfSubmit}>
          <input
            type="button"
            name="submit"
            className="submit"
            value="SUBMIT"
            // onClick={handleClickSubmit}
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

// Form.propTypes = {
//   from: PropTypes.string.isRequired,
//   to: PropTypes.string.isRequired,
//   item: PropTypes.string.isRequired,
//   dateOption: PropTypes.string.isRequired,
//   date: PropTypes.string.isRequired,
//   timeStart: PropTypes.string.isRequired,
//   timeEnd: PropTypes.string.isRequired,
//   quote: PropTypes.string.isRequired,
//   firstName: PropTypes.string.isRequired,
//   lastName: PropTypes.string.isRequired,
//   phone: PropTypes.string.isRequired,

//   classOfFrom: PropTypes.string.isRequired,
//   classOfTo: PropTypes.string.isRequired,
//   classOfItem: PropTypes.string.isRequired,
//   classOfDate: PropTypes.string.isRequired,
//   classOfCustomizedDate: PropTypes.string.isRequired,
//   classOfName: PropTypes.string.isRequired,
//   classOfSubmit: PropTypes.string.isRequired,
//   classOfNext: PropTypes.string.isRequired,
//   classOfAfterSubmit: PropTypes.string.isRequired,

//   handleChange: PropTypes.func.isRequired,
//   handleSelectionChange: PropTypes.func.isRequired,
//   handleKeyPress: PropTypes.func.isRequired,
//   handleClickSubmit: PropTypes.func.isRequired,
//   handleSubmit: PropTypes.func.isRequired,

//   fromDataList: PropTypes.object,
// };
