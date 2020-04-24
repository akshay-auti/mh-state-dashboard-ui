/*
export function someMutation (state) {
}
*/

export const UPDATE_MAHARASHTRA_GEO = (state, payload) => {
    state.maharashtraGeo = payload;
};

export const UPDATE_TABLE_DATA = (state, payload) => {
    state.tableData = payload;
};

export const UPDATE_LINE_DATA = (state, payload) => {
    state.lineData = payload;
};

export const UPDATE_SUSPECT_DATA = (state, payload) => {
    state.suspect = payload;
};

export const UPDATE_AGE_DATA = (state, payload) => {
    state.ageData = payload;
};

export const UPDATE_GENDER_DATA = (state, payload) => {
    state.genderData = payload;
};

export const UPDATE_LOCATION_DATA = (state, payload) => {
    state.locationData = payload;
};