<template>
  <VueApexCharts type="bar" height="400" :options="options" :series="series" v-if="dataFetched"></VueApexCharts>
</template>


<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Graph",
  components: {
    VueApexCharts
  },
  mounted() {},
  methods: {
    ...mapActions("covid", ["fetchLineData"])
  },
  computed: {
    ...mapGetters("covid", [
      "getLineData",
      "getTotalDateWise",
      "getTotalDates"
    ]),
    getTotal() {
      return this.getTotalDateWise;
    }
  },
  beforeCreate() {},
  async created() {
    this.fetchLineData().then(res => {
      this.options = {
        chart: {
          width: "100%",
          type: "bar",
          stacked: true,
          toolbar: {
            show: true
          },
          zoom: {
            enabled: true
          }
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%"
          }
        },
        legend: {
          position: "top",
          offsetY: 20,
          fontSize: "20px",
          fontFamily: "Helvetica, Arial",
          fontWeight: 600,

          onItemHover: {
            highlightDataSeries: true
          },
          itemMargin: {
            horizontal: 20,
            vertical: 0
          }
        },
        colors: ["#f4b400", "#0b9d58", "#4185f4"],

        fill: {
          opacity: 1,
          colors: ["#f4b400", "#0b9d58", "#4185f4"]
        },

        grid: {
          position: "back",
          borderColor: "#111",
          strokeDashArray: 3
        },
        xaxis: {
          type: "datetime",
          categories: []
        }
      };
      this.series = [];
      this.getTotalDateWise.forEach((element, index, arr) => {
        this.series[index] = { name: "", data: [] };
        this.series[index].name = element.name;
        element["data"].forEach(innerElem => {
          this.series[index].data.push(innerElem);
        });
      });
      this.getTotalDates.forEach(element => {
        this.options.xaxis.categories.push(element);
      });
      this.series.shift();
      this.dataFetched = true;
    });
  },
  data() {
    return {
      dataFetched: false,
      series: null,
      options: null
    };
  }
};
</script>