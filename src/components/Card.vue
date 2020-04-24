<template>
  <q-card class="my-card" :style="cardDataStyle">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="icon" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{this.title}}</q-item-label>
        <q-item-label>{{this.number}}</q-item-label>
      </q-item-section>
    </q-item>

    <div class="sparkline" v-if="showSpark===true">
      <VueApexCharts type="area" :options="options" :series="series" height="30px"></VueApexCharts>
    </div>
  </q-card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "Card",
  components: {
    VueApexCharts
  },
  computed: {
    cardDataStyle() {
      return (
        "background-color: " +
        this.bgcolor +
        ";padding:10px" +
        ";color:#FFFFFF" +
        ";font-size:20px" +
        ";font-weight:600"
      );
    }
  },
  props: ["title", "number", "showSpark", "bgcolor", "icon"],
  data() {
    return {
      options: {
        chart: {
          id: "vuechart-example",
          type: "area",
          sparkline: {
            enabled: true
          },
          fill: {
            opacity: 0.3
          },
          stroke: {
            curve: "straight"
          },
          colors: ["#DCE6EC"]
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>

<style scoped>
.my-card {
  width: 400px;
  margin: auto;
}

.sparkline {
  padding: 10px;
}
</style>