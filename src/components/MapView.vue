<template>
  <l-map :center="[18.506941, 76.722959]" :zoom="6" :options="mapOptions" v-if="dataFetched">
    <l-choropleth-layer
      :data="getMapData"
      title-key="district"
      id-key="district"
      :value="value"
      :geojson="this.getGeo"
      geojson-id-key="district"
      :center="center"
      :color-scale="colorScale"
      :map-options="mapOptions"
      currentStrokeColor="FF0000"
      :currentStrokeWidth="1"
    >
      <template slot-scope="props">
        <l-info-control :item="props.currentItem" :unit="props.unit" title="Data" />
        <l-reference-chart
          title="Total Infections"
          :colorScale="colorScale"
          :min="props.min"
          :max="props.max"
          position="bottomright"
        />
      </template>
    </l-choropleth-layer>
  </l-map>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { LMap } from "vue2-leaflet";
import { InfoControl, ReferenceChart, ChoroplethLayer } from "vue-choropleth";

export default {
  name: "MapView",
  components: {
    LMap,
    "l-info-control": InfoControl,
    "l-reference-chart": ReferenceChart,
    "l-choropleth-layer": ChoroplethLayer
  },
  data() {
    return {
      dataFetched: false,
      center: [76.354112, 13.577702],
      geoJson: null,
      colorScale: ["bfff00", "ffff00", "ffbf00", "ff8000", "ff4000"],
      value: {
        key: "totalCases",
        metric: "cases"
      },
      mapOptions: {
        attributionControl: false,
        dragging: false,
        zoomControl: false,
        dragging: false,
        trackResize: false,
        scrollWheelZoom: false
      }
    };
  },

  mounted() {
    // var c = JSON.parse(JSON.stringify(this.getTableData));
    // console.log({ c: c });
    // this.mapData = c;
    this.dataFetched = true;
  },
  computed: {
    ...mapGetters("covid", ["getGeo", "getTableData"]),
    getMapData() {
      
      return JSON.parse(JSON.stringify(this.getTableData));
    }
  }
};
</script>

<style scoped>
</style>