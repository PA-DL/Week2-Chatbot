"use strict";

const axios = require("axios");
const apikey = "0etMGIdnAcAkhXj6mkhMYTuSxgmYwMa2"; 

const getWeather = location => {
    return new Promise(async (resolve, reject) => {
        try{
            const weatherConditions = await axios.get("http://dataservice.accuweather.com/currentconditions/v1/"+key+"?apikey="+apikey+"&language=en",
            {
                params: {
                    key: apikey,
                    q: location,
                    days: 3
                }
            });

            resolve(weatherConditions.data);
        }
        catch(error){
            reject(error);
        }
    });
}

module.exports = getWeather;