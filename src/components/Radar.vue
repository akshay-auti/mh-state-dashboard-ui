<template>
  <VueApexCharts type="radar" height="400" :options="options" :series="series" v-if="dataFetched"></VueApexCharts>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Radar",
  components: {
    VueApexCharts
  },
  methods: {
    ...mapActions("covid", ["fetchAgeData"])
  },
  computed: {
    ...mapGetters("covid", ["getAgeWise"])
  },
  async created() {
    this.fetchAgeData().then(res => {
      this.options = {
        chart: {
          height: 400,
          type: "radar"
        },
        title: {
          text: "Age Wise Distribution"
        },
        xaxis: {
          categories: [],
          labels: {
            show: true,
            style: {
              colors: ["#a8a8a8"],
              fontSize: "11px",
              fontFamily: "Arial"
            }
          }
        },
        dataLabels: {
          enabled: true
        },
        markers: {
          size: 5,
          hover: {
            size: 10
          }
        }
      };
      this.series = [];
      this.series[0] = { name: "Case Count", data: [] };
      this.getAgeWise.forEach((element, index, arr) => {
        this.series[0].data.push(element.count);
        this.options.xaxis.categories.push(element.ageRange);
      });

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