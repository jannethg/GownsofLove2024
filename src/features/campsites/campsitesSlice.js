//using lowecase file here (campsitesSlice.js) - 
//which means it willnot export a component

import { CAMPSITES } from "../../app/shared/CAMPSITES";

//retrieve all campsites object
export const selectAllCampsites = () => {
    return CAMPSITES;
};


//retrieve a random campsite object from campsite array.

// export const selectRandomCampsite = () => {  
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// }

export const selectCampsiteById = (id) => {
    return CAMPSITES.find(((campsite) => campsite.id === id));
};