const request = require('request');
const dotenv = require('dotenv');
const argv = require('yargs').argv;

dotenv.config();

let apiKey = process.env.OPEN_WEATHER_API_KEY;
let city = argv.c || 'burnham, us';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url, (err, repsonse, body) => {
    if (err) {
        console.log('error:', err);
    } else {
        let weather = JSON.parse(body);
        let message = `It's ${weather.main.temp}\u00b0F in ${weather.name}`;
        console.log(message);
    }
});