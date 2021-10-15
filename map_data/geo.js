var fs = require("fs");
console.log("Initializeing Script");
const india_data = require("./india_districts.json")
const states = india_data.features.map(feature => (
        {
            [feature.properties["ID_1"]]: feature.properties["NAME_1"].toLowerCase().split(" ").join("_")
        })).reduce((state,final) => ({...final, ...state}),{});
Object.entries(states).forEach(([id,state_name]) => {
    state_geojson = {...india_data, features: india_data.features.filter(feature => feature.properties.ID_1 == id)}
    console.log(state_name + " : " + state_geojson.features.length)
    fs.writeFile(`../public/geojson/${state_name}.json`,JSON.stringify(state_geojson),()=>{})
});
console.log("Script Complete")