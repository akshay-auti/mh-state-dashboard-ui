<template>
  <VueApexCharts type="donut" :options="options" :series="series" v-if="dataFecthed"></VueApexCharts>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Pie",
  components: {
    VueApexCharts
  },
  props: ["pieType", "pieTitle"],
  methods: {
    ...mapActions("covid", ["fetchPieData"])
  },
  computed: {
    ...mapGetters("covid", ["getGenderData", "getLocationData"])
  },
  async created() {
    this.fetchPieData(this.pieType).then(res => {
      this.options = {
        plotOptions: {
          pie: {
            customScale: 1,
            donut: {
              size: "20%",
              labels: {
                show: true
              }
            }
          }
        },
        chart: {
          type: "donut",
          toolbar: {
            show: true
          }
        },

        legend: {
          position: "bottom"
        },
        title: {
          text: "",
          margin: 20,
          align: "center"
        },
        labels: []
      };
      this.series = [];
      this.options.title.text = this.pieTitle;
      if (this.pieType === "GENDER") {
        this.getGenderData.forEach((elem, index, arr) => {
          this.series.push(elem.count);
          this.options.labels.push(elem.gender);
        });
      } else {
        this.getLocationData.forEach((elem, index, arr) => {
          this.series.push(elem.count);
          this.options.labels.push(elem.location);
        });
      }
    });
    this.dataFecthed = true;
  },
  data() {
    return {
      series: null,
      // series: [44, 55, 41, 17, 15],
      options: null,
      dataFecthed: false
    };
  }
};
</script>