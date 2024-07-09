import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from "../features/campsites/campsitesSlice";

//this will configure the Redux store
//so that the global application state object that it contains will include a slice for campsites

//at this point were only updated the internal logic of our app
export const store = configureStore({
  reducer: {
    counter: campsitesReducer,
  },
});
