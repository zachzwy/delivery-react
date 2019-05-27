/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

function Form({
  from,
  to,
  item,
  dateOption,
  date,
  timeStart,
  timeEnd,
  quote,
  firstName,
  lastName,
  phone,

  classOfFrom,
  classOfTo,
  classOfItem,
  classOfDate,
  classOfCustomizedDate,
  classOfName,
  classOfSubmit,
  classOfNext,
  classOfAfterSubmit,

  handleChange,
  handleSelectionChange,
  handleKeyPress,
  handleClickSubmit,
  handleSubmit,

  fromDataList,
}) {
  return (
    <div id="form-container">
      <form id="form" onSubmit={handleSubmit}>
        <label className={classOfFrom}>
          I WANT TO MOVE FROM:
          <br />
          <datalist id="fromDataList">
            {fromDataList && fromDataList.map(item => <option key={item} value={item} />)}
          </datalist>
          <input
            type="text"
            name="from"
            value={from}
            placeholder="Pick up location..."
            list="fromDataList"
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={classOfTo}>
          I WANT TO MOVE TO:
          <br />
          <input
            type="text"
            name="to"
            value={to}
            placeholder="Drop off location..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={classOfItem}>
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
        <label className={classOfDate}>
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
        <label className={classOfCustomizedDate}>
          NONE OF ABOVE WORKS. ADD MY AVAILABILITIES:
          <br />
          <input
            type="date"
            className="date"
            name="date"
            value={date}
            onChange={handleChange}
          />
          <span className="date-span">DATE:</span>
          <br />
          <input
            type="time"
            className="time-start"
            name="timeStart"
            value={timeStart}
            onChange={handleChange}
          />
          <span className="time-start-span">FROM:</span>
          <input
            type="time"
            className="time-end"
            name="timeEnd"
            value={timeEnd}
            onChange={handleChange}
          />
          <span className="time-end-span">TO:</span>
          <span id="quote">{quote}</span>
        </label>
        <label className={classOfName}>
          I AM:
          <br />
          <input
            type="text"
            className="name"
            name="firstName"
            value={firstName}
            placeholder="First name..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
          <input
            type="text"
            name="lastName"
            className="name"
            value={lastName}
            placeholder="Last name..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
          <input
            type="tel"
            name="phone"
            className="phone"
            value={phone}
            placeholder="Phone number..."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            required
          />
        </label>
        <label className={classOfSubmit}>
          <input
            type="button"
            name="submit"
            className="submit"
            value="SUBMIT"
            onClick={handleClickSubmit}
          />
        </label>
        <label className={classOfNext}>
          {((classOfItem === '' || classOfDate === '') && classOfName === 'none') ? 'Select to move on' : 'Enter to move on'}
          <div className='next-ani'>&#8595;</div>
        </label>
      </form>
      <div className={classOfAfterSubmit}>
        <p id="thanks">{`THANKS, ${firstName.toUpperCase()}. WE WILL CONFIRM WITH YOU SHORTLY.`}</p>
      </div>
    </div>
  );
}

export default Form;
