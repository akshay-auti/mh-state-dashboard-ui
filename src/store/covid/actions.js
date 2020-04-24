/*
export function someAction (context) {
}
*/
import axios from "axios";
//const KarnatakaUrl = "https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/state_ut/karnataka/district/karnataka_district.json";
//const MaharashtraUrl = "https://raw.githubusercontent.com/HindustanTimesLabs/shapefiles/master/state_ut/maharashtra/district/maharashtra_district.json";

//const baseUrl = "http://34.68.195.56/api";
const baseUrl = "http://localhost:5000";

const tableData = baseUrl + "/tableData";
const lineData = baseUrl + "/lineData";
const ageData = baseUrl + "/age";
const genderData = baseUrl + "/gender";
const locationData = baseUrl + "/locations";
const suspect = baseUrl + "/suspect";

// export const fetchGeoJson = ({ commit }) => {
//   axios.get(MaharashtraUrl).then(response => {
//     //      commit('UPDATE_MAHARASHTRA_GEO', response.data);
//   });
// };

export const fetchTableData = ({ commit }) => {
  axios.get(tableData).then(response => {
    commit("UPDATE_TABLE_DATA", response.data);
  });
};

export const fetchLineData = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(lineData)
      .then(response => {
        commit("UPDATE_LINE_DATA", response.data);
        resolve();
      })
      .catch(err => {
        reject();
      });
  });
};

export const fetchSuspect = ({ commit }) => {
  axios.get(suspect).then(response => {
    commit("UPDATE_SUSPECT_DATA", response.data);
  });
};

export const fetchAgeData = ({ commit }) => {
  return new Promise((resolve, reject) => {
    axios
      .get(ageData)
      .then(response => {
        commit("UPDATE_AGE_DATA", response.data);
        resolve();
      })
      .catch(err => {
        reject();
      });
  });
};

export const fetchPieData = ({ commit }, pieType) => {
  return new Promise((resolve, reject) => {
    if (pieType === "GENDER") {
      axios
        .get(genderData)
        .then(response => {
          commit("UPDATE_GENDER_DATA", response.data);
          resolve();
        })
        .catch(err => {
          reject();
        });
    } else {
      axios
        .get(locationData)
        .then(response => {
          commit("UPDATE_LOCATION_DATA", response.data);
          resolve();
        })
        .catch(err => {
          reject();
        });
    }
  });
};
