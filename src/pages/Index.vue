<template>
  <div class="page_container">
    <div class="top_cards">
      <div class="top_indiv_card">
        <Card title="Total" :number="12" bgcolor="#eb5757" icon="/statics/cases.svg" />
      </div>
      <div class="top_indiv_card">
        <Card title="In Hospital" :number="12" bgcolor="#f4b400" icon="/statics/hospital.svg" />
      </div>
      <div class="top_indiv_card">
        <Card title="Recovered" :number="12" bgcolor="#0b9d58" icon="/statics/recovered.svg" />
      </div>
      <div class="top_indiv_card">
        <Card title="Deceased" :number="12" bgcolor="#4185f4" icon="/statics/deceased.svg" />
      </div>
    </div>
    <div class="timeline">
      <Timeline class="timelineData" />
    </div>
    <div class="middle_cards">
      <div class="top_indiv_card">
        <Card
          :title="getTotalSuspect.title"
          :number="getTotalSuspect.count"
          bgcolor="#0070c0"
          icon="/statics/suspect.svg"
        />
      </div>
      <div class="top_indiv_card">
        <Card
          :title="getHomeSuspect.title"
          :number="getHomeSuspect.count"
          bgcolor="#0070c0"
          icon="/statics/stay-home.svg"
        />
      </div>
      <div class="top_indiv_card">
        <Card
          :title="getHospitalSuspect.title"
          :number="getHospitalSuspect.count"
          bgcolor="#0070c0"
          icon="/statics/hospitalSuspect.svg"
        />
      </div>
      <div class="top_indiv_card">
        <Card
          :title="getCompletedSuspect.title"
          :number="getCompletedSuspect.count"
          bgcolor="#0070c0"
          icon="/statics/smile.svg"
        />
      </div>
    </div>
    <div class="locationData">
      <div class="map_data">
        <MapView />
      </div>
      <div class="table_view">
        <Table />
      </div>
    </div>
    <div class="data_split">
      <div class="radar_map">
        <Radar />
      </div>
      <div class="radar_map">
        <Pie pieType="GENDER" pieTitle="Gender Wise Distribution" />
      </div>
      <div class="radar_map">
        <Pie pieType="LOCATIONS" pieTitle="Location Wise Distribution" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card";
import Table from "../components/Table";
import Timeline from "../components/Timeline";
import Radar from "../components/Radar";
import Pie from "../components/Pie";
import MapView from "../components/MapView";
import { mapGetters, mapActions } from "vuex";
import { getTotalSuspect } from "../store/covid/getters";

export default {
  name: "PageIndex",

  components: {
    MapView,
    Table,
    Card,
    Timeline,
    Radar,
    Pie
  },
  data() {
    return {
      totalSuspectsTitle: this.totalSuspect
    };
  },
  created() {
    this.fetchSuspect();
  },
  computed: {
    ...mapGetters("covid", [
      "getTotalSuspect",
      "getHomeSuspect",
      "getHospitalSuspect",
      "getCompletedSuspect"
    ])
  },
  methods: {
    ...mapActions("covid", ["fetchGeoJson", "fetchSuspect"])
  },
  mounted() {
    // this.fetchGeoJson();
  }
};
</script>

<style scoped>
.page_container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 10px;
}

.top_cards {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.map_data {
  flex: 1;
  background-color: azure;
}

.table_view {
  flex: 1;
  background-color: black;
}

@media (max-width: 1333px) {
  .top_indiv_card {
    flex: 1;
    padding: 10px;
    flex-basis: 33.33%;
  }
  .radar_map {
    flex: 1;
    padding: 10px;
    margin-top: 20px;
    flex-basis: 33.33%;
  }

  .map_data {
    flex: 1;
    background-color: azure;
    flex-basis: 33.33%;
  }

  .table_view {
    flex: 1;
    background-color: black;
    flex-basis: 33.33%;
  }
}

@media (max-width: 1073px) {
  .top_indiv_card {
    flex: 1;
    padding: 10px;
    flex-basis: 33.33%;
  }

  .radar_map {
    flex: 1;
    padding: 10px;
    margin-top: 20px;
    flex-basis: 33.33%;
  }

  .map_data {
    display: none;
    background-color: azure;
  }

  .table_view {
    flex: 1;
    background-color: black;
    flex-basis: 33.33%;
  }
}

@media (max-width: 815px) {
  .top_indiv_card {
    flex: 1;
    padding: 10px;
    flex-basis: 50%;
  }

  .radar_map {
    flex: 1;
    padding: 10px;
    margin-top: 20px;
    flex-basis: 50%;
  }

  .map_data {
    display: none;
    background-color: azure;
    flex-basis: 0%;
  }

  .table_view {
    flex: 1;
    background-color: black;
    flex-basis: 100%;
  }
}

@media (max-width: 555px) {
  .top_indiv_card {
    flex: 1;
    padding: 10px;
    flex-basis: 100%;
  }

  .radar_map {
    flex: 1;
    padding: 10px;
    margin-top: 20px;
    flex-basis: 100%;
  }

  .map_data {
    display: none;
    background-color: azure;
    flex-basis: 0%;
  }

  .table_view {
    flex: 1;
    background-color: black;
    flex-basis: 100%;
  }
}

.timeline {
  flex: 2;
  display: flex;
  width: 100%;
  flex-basis: 10%;
}

.timelineData {
  width: 100%;
  margin: 40px 0px;
}

.middle_cards {
  padding: 20px;
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  background-color: #e8e8e8;
}

.locationData {
  flex: 3;
  display: flex;
  margin-top: 20px;
  flex-flow: row wrap;
  justify-content: space-evenly;
}

.data_split {
  flex: 2;
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>
