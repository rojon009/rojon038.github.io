const request = require('request');

const forcast = (location, callback) => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c2386ff6dd3cbbe2f3b0f106764d6fe7&units=metric`;
    
    request({url: url, json: true}, (err, res, body) => {
        if(err) {
            callback('Unable to connect to the weather services!',undefined);
        } else if (body.message) {
            callback(body.message,undefined);
        }
        else {
            const main = body.main;

            callback(undefined, `The current Temp of ${location.toUpperCase()} ${main.temp}°C. It feels like ${main.feels_like}°C`);
            // console.log(`The current Temp of ${location.toUpperCase()} ${main.temp}°C. It feels like ${main.feels_like}°C`);
        }
    })
}

// forcast('Rajshahi',(err,data)=> {
//     console.log(err);
//     console.log(data);
// })
module.exports = forcast;