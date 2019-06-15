export default function getDirection(pointA, pointB) {
  const query = `${pointA.longitude},${pointA.latitude};${pointB.longitude},${pointB.latitude}`;
  const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${query}?access_token=pk.eyJ1IjoiemFjaHp3eSIsImEiOiJjanczeWZ1aGYxOW05M3pwczRkZ3A1NGJ4In0.BFX8cW_ZygtvgjIvrwhT1g`;
  let points;
  fetch(url)
    .then(response => response.json())
    .then(json => {
      return json.waypoints.map(point => point.location)
    })
    .catch(e => console.log(e.message));
  
};
