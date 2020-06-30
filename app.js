const request = require('request');
const geoCode = require('./utils/geoCode');
const forcast = require('./utils/forcast');

// const location = process.argv[2];

const cord = {
    lon: 88.6241257,
    lat: 24.387340299999998
}

// forcast(cord.lon,cord.lat,getweather);

geoCode(cord.lon, cord.lat, (err, geoData) => {
    if (err) return console.log(err);

    forcast(geoData, (err, forcastData) => {
        if(err) return console.log(err);
        console.log(geoData);
        console.log(forcastData);
    })
})



