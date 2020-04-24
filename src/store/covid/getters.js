/*
export function someGetter (state) {
}
*/

export function getGeo(state) {
    // var featureList = state.maharashtraGeo.features.map(indiv => {
    //     var temp_obj = indiv;
    //     temp_obj.properties.district = temp_obj.properties.district.toUpperCase();
    //     return temp_obj;
    // });
    // state.maharashtraGeo.features = featureList;
    return state.maharashtraGeo;
};

export function getTableData(state) {
    return Object.freeze(state.tableData);
};

export function getGenderData(state) {
    return state.genderData;
}

export function getLocationData(state) {
    return state.locationData;
}

export function getLineData(state) {
    return state.lineData;
};

export function getAgeWise(state) {
    return state.ageData;
};

export function getTotalDateWise(state) {
    var totalCases = state.lineData.map((lineD) => {
        return lineD.totalCases;
    });
    var totalHospital = state.lineData.map((lineD) => {
        return lineD.totalInHospital;
    });
    var totalRecovered = state.lineData.map((lineD) => {
        return lineD.totalRecovered;
    });
    var totalDeceased = state.lineData.map((lineD) => {
        return lineD.totalDeceased;
    });

    var series = [];
    series.push({ name: "Total", data: totalCases });
    series.push({ name: "InHospital", data: totalHospital });
    series.push({ name: "Recovered", data: totalRecovered });
    series.push({ name: "Deceased", data: totalDeceased });
    console.log({ sdfsdfsdf: series });

    return series;
}

export function getTotalDates(state) {
    var dates = state.lineData.map(D => {
        return D.reportDate;
    });
    return dates;
}

export function getTotalSuspect(state) {
    return state.suspect[0];
}
export function getHomeSuspect(state) {
    return state.suspect[1];
}
export function getHospitalSuspect(state) {
    return state.suspect[2];
}
export function getCompletedSuspect(state) {
    return state.suspect[3];
}