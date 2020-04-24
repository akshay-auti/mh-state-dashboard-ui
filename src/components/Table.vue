<template>
  <q-table
    style="height: 400px"
    title="Case Summary"
    :data="getTableData"
    :columns="columns"
    row-key="index"
    virtual-scroll
    :pagination.sync="pagination"
    :rows-per-page-options="[0]"
    :dense="$q.screen.lt.md"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Table",
  methods: {
    ...mapActions("covid", ["fetchTableData"])
  },
  beforeMount() {
    this.fetchTableData();
  },
  computed: {
    ...mapGetters("covid", ["getTableData"])
  },
  data() {
    return {
      pagination: {
        rowsPerPage: 0
      },
      columns: [
        {
          name: "district",
          label: "District",
          field: "district",
          align: "left",
          sortable: true
        },
        {
          name: "totalCases",
          align: "center",
          label: "Total Cases",
          field: "totalCases",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "hospitalCases",
          align: "center",
          label: "Hospital Cases",
          field: "hospitalCases",
          sortable: true
        },
        {
          name: "DeceasedCases",
          align: "center",
          label: "Deceased Cases",
          field: "deceasedCases",
          sortable: true,
          sort: (a, b) => parseInt(a, 10) - parseInt(b, 10)
        },
        {
          name: "RecoveredCases",
          align: "center",
          label: "Recovered Cases",
          field: "recoveredCases",
          sortable: true,
          sort: (a, b) => a - b
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>