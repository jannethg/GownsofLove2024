//using lowecase file here (campsitesSlice.js) - 
//which means it willnot export a component

import { GOWNS } from "../../app/shared/GOWNS";

//retrieve all campsites object
export const selectAllGowns = () => {
    return GOWNS;
};


//retrieve a random campsite object from campsite array. 
// export const selectRandomGown = () => {  
//     return GOWNS[Math.floor(GOWNS.length * Math.random())];
// }

export const selectGownById = (id) => {
    return GOWNS.find(((gown) => gown.id === id));
};