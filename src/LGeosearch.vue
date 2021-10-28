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
