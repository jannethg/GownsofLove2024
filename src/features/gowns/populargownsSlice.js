//using lowecase file here (campsitesSlice.js) -
//which means it willnot export a component


import { POPULARS } from "../../app/shared/POPULARS";

//retrieve all campsites object
export const selectAllPopulars = () => {
  return POPULARS;
};

//retrieve a random campsite object from campsite array.
// export const selectRandomGown = () => {
//     return GOWNS[Math.floor(GOWNS.length * Math.random())];
// }


export const selectPopularById = (id) => {
  return POPULARS.find((popular) => popular.id === id);
};


export const selectFeaturedPopular = () => {
  return POPULARS.find((popular) => popular.featured);
};
