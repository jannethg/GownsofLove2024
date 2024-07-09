import { createSlice } from "@reduxjs/toolkit";
import { CAMPSITES } from "../../app/shared/CAMPSITES";

const initialState = {
  campsitesArray: CAMPSITES,
};

//we need to pass some data to create slice in a form of an object.
//object with 2 properties: name and initial state
const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

//we can export campsiteSlice as a function name campsiteReducer
export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
  return CAMPSITES.find((campsite) => campsite.featured);
};
