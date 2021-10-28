# tf-vue-leaflet-geosearch

vue2 component for leaflet-geosearch

## Install

```
npm install tf-vue-leaflet-geosearch
```

## Usage

```
import LGeosearch from "tf-vue--leaflet-geosearch"
```

```
<l-geosearch ::options="geosearchOptions" :map="$refs.map.mapObject"/>
```

```
components: { LGeosearch },
data() {
    return {
        geosearchOptions: {
        provider: new OpenStreetMapProvider({
          params: {
            viewbox: "33.01721,44.82159,35.09912,44.33249",
            countrycodes: "ru,ua"
          }
        }),
        style: "button",
        autoComplete: true,
        autoCompleteDelay: 250,
        showMarker: true,
        showPopup: false,
        marker: {
          icon: <some icon>,
          draggable: false
        },
        popupFormat: ({ result }) =>
          `<div class="map-tooltip">
            <div class="map-tooltip__block">
              <div class="map-tooltip__item">${result.label}</div>
            </div>
          </div>`,
        maxMarkers: 1,
        retainZoomLevel: false,
        animateZoom: true,
        autoClose: true,
        searchLabel: "Поиск по адресу",
        keepResult: true
      },
    }
}
```
