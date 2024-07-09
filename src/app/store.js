import { configureStore } from "@reduxjs/toolkit";
//import counterReducer from '../features/counter/counterSlice';
import { campsitesReducer } from '../features/campsites/campsitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from "../features/partners/partnersSlice";
import { promotionsReducer } from "../features/promotions/promotionsSlice";



//this combines all the slices into a unified whole, stored together in the redux store. 
export const store = configureStore({
  reducer: {
      campsites: campsitesReducer,
      comments: commentsReducer,
      partners: partnersReducer,
      promotions: promotionsReducer
  }
});

console.log(store.getState());
