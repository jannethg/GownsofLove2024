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


//Function by passing a specific id
//return by campsites.find() array.
//parameter of campsite to find by campsite.id

// export const selectCampsiteById = (id) => {
//     return CAMPSITES.find(((campsite) => campsite.id === id));
// };


//parseInt to convert the string value to an integer
export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
}