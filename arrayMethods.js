//Array.map() review -- it doesn't mutate
// const names = ["anne", "barry", "chloe"];
// const bigNames = names.map((name) => name.toUpperCase());

// console.log(bigNames);
// console.log(names);


//Array.filter() and Array.find() Method
// const newArray = Array.filter(callbackFn);
// const value = Array.find(callbackFn);

const things = [
    {
        id: 0,
        title: 'whiskers on kittens',
        favorite: true,
        points: 97
    },
    {
        id: 1,
        title: 'raindrops on roses',
        favorite: true,
        points: 77
    },
    {
        id: 2,
        title: 'brown paper packages tied up with string',
        favorite: true,
        points: 87
    },
    {
        id: 3,
        title: 'dog bite',
        favorite: false,
        featured: 'true',
        points: 12
    },
    {
        id: 4,
        title: 'bee sting',
        favorite: false,
        points: 6
    }
];

// const myFavThings = things.filter((thing) => thing.favorite);
// console.log(myFavThings);

// const thingsOverFiftyPts = things.filter((thing) => thing.points > 50 );
// console.log(thingsOverFiftyPts);

//Find Array returns the first item that passes the test. 
 
// const selectThingByID = (id) => {
//     return things.find((thing) => thing.id === id);
// };

// const selectedThing = selectThingByID(4);
// console.log(selectedThing);

// const selectByFeature = (featured) => {
//     return things.filter((thing) => thing.featured === 'true');
// }

// const selectedFeature = selectByFeature();
// console.log(selectedFeature);

// const featuredThing = things.find((thing)=> thing.featured);
// console.log(featuredThing);

console.log(things.find((thing)=> thing.featured))