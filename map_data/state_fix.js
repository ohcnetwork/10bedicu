var fs = require("fs");
const india_data = require("./india_district_base.json")
const andhra_districts = [
    "Anantapur",
    "Chittoor",
    "East Godavari",
    "Guntur",
    "cuddapah",
    "Krishna",
    "Kurnool",
    "Nellore",
    "Prakasam",
    "Srikakulam",
    "Vizianagaram",
    "vishakhapatnam",
    "West Godavari"
].map(d=>d.toLowerCase().split(" ").join("_"))
// console.log(andhra_districts.length)
// const districts = india_data.features.map(feature => (
//         {
//             district: feature.properties["NAME_2"].toLowerCase().split(" ").join("_"),
//             state: feature.properties["NAME_1"].toLowerCase().split(" ").join("_"),
//             district_id: Number(feature.properties["ID_2"]),
//             state_id: feature.properties["ID_1"]
//         }))
//         .filter(district => district.state == "andhra_pradesh").map(d=>d.district)
//         .filter(district => !andhra_districts.includes(district))
// console.log(districts.length)
// console.log(districts)

const geojson = {...india_data, features: india_data.features.filter(
    feature => !(feature.properties.NAME_1.toLowerCase().split(" ").join("_") == "andhra_pradesh" && 
    !andhra_districts.includes(feature.properties.NAME_2.toLowerCase().split(" ").join("_"))))
}
fs.writeFile(`india_districts.json`,JSON.stringify(geojson),()=>{})