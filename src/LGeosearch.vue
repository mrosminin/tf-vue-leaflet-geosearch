<!-- Компонент для поиска по адресу -->
<template>
  <div/>
</template>

<script>
import { GeoSearchControl } from "leaflet-geosearch"
export default {
  name: "LGeosearch",
  props: {
    options: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.map.addControl(new GeoSearchControl(this.options))
  }
}
</script>

<style lang="scss">
.geosearch.leaflet-bar {
  box-shadow: none;
}

/deep/ .geosearch.leaflet-bar.leaflet-control.leaflet-control-geosearch {
  margin-left: 20px;
}

.leaflet-control-geosearch .results.active {
  min-width: 40vw !important;
  border-radius: 5px !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) !important;
}

.leaflet-control.geosearch {
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) !important;
}

.leaflet-control.geosearch a {
  box-shadow: none !important;
  border-radius: 5px !important;
}

.leaflet-control.geosearch a:after {
  top: 10px !important;
  left: 10px !important;
  border-color: #999999 !important;
}

.leaflet-control.geosearch a:before {
  top: 23px !important;
  left: 19px !important;
  background: #999999;
  border-color: #999999 !important;
}

.leaflet-control.geosearch a.reset {
  font-size: 14px !important;
  border-radius: 0 5px 5px 0 !important;
  border: none !important;
  box-shadow: none !important;
  right: 0;
  color: transparent !important;
}

.leaflet-control.geosearch a.reset:before {
  position: absolute;
  content: " ";
  display: block;
  width: 20px;
  height: 2px;
  background: #999999;
  transform: rotate(45deg);
  top: 18px !important;
  left: 10px !important;
}

.leaflet-control.geosearch a.reset:after {
  position: absolute;
  content: " ";
  display: block;
  width: 20px;
  height: 2px;
  background: #999999;
  transform: rotate(315deg);
  top: 18px !important;
  left: 10px !important;
}

.leaflet-control-geosearch form,
.leaflet-control-geosearch input {
  width: 200px !important;
  height: 38px !important;
}

.leaflet-control-geosearch form {
  width: 238px !important;
  border: none !important;
  top: 0 !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) !important;
  border-radius: 0 5px 5px 0 !important;
}

.leaflet-control-geosearch .results.active {
  min-width: 40vw !important;
  padding: 0 !important;
  margin-left: 8px;
  border-radius: 0 0 5px 5px !important;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2) !important;
}

.leaflet-control-geosearch .results.active > * {
  border: none !important;
  padding: 5px 10px !important;
}
</style>
