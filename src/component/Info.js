import React from "react";

import {
  useForm,
  useUiState,
  useGeocoding,
  useUpdateMap
} from "../customHooks";
import { Form, Map } from ".";

export default function Info() {
  const formBundle = useForm({
    from: "",
    to: "",
    item: "",
    dateOption: "",
    date: "",
    timeStart: "",
    timeEnd: "",
    quote: "$30-60",
    firstName: "",
    lastName: "",
    phone: ""
  });

  const uiStateBundle = useUiState({
    classOfFrom: "",
    classOfTo: "none",
    classOfItem: "none",
    classOfDate: "none",
    classOfCustomizedDate: "none",
    classOfName: "none",
    classOfSubmit: "none",
    classOfNext: "next",
    classOfAfterSubmit: "none"
  });

  const from = formBundle.inputs.from;
  const to = formBundle.inputs.to;
  const dropdownDataFrom = useGeocoding(from);
  const dropdownDataTo = useGeocoding(to);
  const dropdownDataFromList =
    dropdownDataFrom && dropdownDataFrom.map(item => item.place_name);
  const dropdownDataToList =
    dropdownDataTo && dropdownDataTo.map(item => item.place_name);

  const {
    viewport,
    handleViewportChange,
    handleUpdateMap,
    location,
    points,
    duration
  } = useUpdateMap(dropdownDataFrom, dropdownDataTo);

  const item = formBundle.inputs.item;
  const loadingTime = {
    "size-i": 20,
    "size-ii": 40,
    "size-iii": 60,
    "size-iv": 120
  }[item];

  return (
    <div className="info">
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
