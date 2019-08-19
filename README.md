### Intro

4000+ international students/scholars arrive in WashU each year. Many of them choose to buy used furniture. It is a pain point for both personal sellers and buyers to deliver big furniture when making a sale. To address this issue, I gather their furniture delivery data, negotiate and pair them in groups, rent U-Haul for them to solve their problems by optimizing the cost and delivery time.

### File Structure

```
...
src
├── calculation
│   ├── index.js
│   └── minuteToHour.js           # Convert minute to hour
│
├── component
│   ├── index.js
│   ├── CityPin.js                # A graph element on map
│   ├── Form.js                   # Form component, main interaction part
│   ├── Info.js                   # Parent component on top of Form and Map
│   ├── Intro.js                  # Open page
│   ├── Map.js                    # Map component, main visualization part
│   ├── Nav.js                    # Navigation component
│   ├── Pin.js                    # A graph element on map
│   ├── PolylineOverlay.js        # Polyline represents the route
│   └── Progress.js               # Progress bar
│
├── customHooks
│   ├── index.js
│   ├── useForm.js                # To control form
│   ├── useGeocoding.js           # To control location search
│   ├── useUiState.js             # To control all ui state
│   └── useUpdateMap.js           # To control the update of map

├── utilities
│   └── index.js
│
├── App.js
└── App.scss

...
```

### Todo List
