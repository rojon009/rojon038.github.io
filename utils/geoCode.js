const request = require('request');


const geoCode = (lon,lat,callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${lon},${lat}.json?access_token=pk.eyJ1Ijoicm9qb24iLCJhIjoiY2tibnltNXZhMWY1dTMzczQybmczZ252eCJ9.fdeVaMCASuf58iNweI2ymg`;
    
    request({url: url, json: true}, (err, res, body) => {
        if(err){
            callback('Unable to connect to the location services!', undefined);
        } else if (body.message) {
            callback(body.message, undefined);
        } else {
            const area = body.features[0].context[0].text;
            callback(undefined, area);
        }
    })
}



// geoCode(88.6241257,24.387340299999998, (err, data) => {
//     console.log(err);
//     console.log(data);
// });

module.exports = geoCode




