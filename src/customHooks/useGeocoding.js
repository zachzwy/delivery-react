import { useState, useEffect } from "react";

export default function useGeocoding(query) {
  const [dropdownData, setDropdownData] = useState(null);

  useEffect(() => {
    loadDropdownDataFrom(query);
  }, [query]);

  const loadDropdownDataFrom = (query, setFn) => {
    if (query === "") return;
    let url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g`;
    fetch(url)
      .then(response => response.json())
      .then(json => {
        setDropdownData(json.features);
      })
      .catch(e => console.log(e.message));
  };

  return dropdownData;
}
