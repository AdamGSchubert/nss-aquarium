/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            image: "./img/kissing loach.jpg",
            name: "James",
            species: "Kissing Loach",
            length: "5.5 Inches",
            location: "Japan",
            food: ["mud worms","water fleas"]
        },
        {
            image: "./img/tequila splitfin.png",
            name: "Joe Exotic",
            species: "Tequila Splitfin",
            length: "1.5 Inches",
            location: "Central Mexico",
            food: ["Zooplankton","Chrironomids","Tequila Splitfin"]
        },
        {
            image: "./img/smalltooth-sawfish-copy.png",
            name: "Larry",
            species: "Smalltooth Sawfish",
            length: "12 Feet",
            location: "Eastern USA",
            food: ["Fish","Shrimp", "Crabs"]
        }
    ]
}

//create fish add function
/*let addFish = ()=>{
    let fish ={
        species: "",
        length:"",
        name:"",
        harvestLocation:"",
        diet:[],
     }

}*/


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}