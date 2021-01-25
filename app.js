'use strict';

const axios = require('axios');
const { request } = require('http');
const { Http2ServerRequest } = require('http2');
const { exit } = require('process');
const Readline = require('readline'); // for reading inputs
const matchPattern = require('./matcher');
const rl = Readline.createInterface({ // for reading inputs
    input: process.stdin,
    output: process.stdout,
    terminal: false
})

const matcher = require('./matcher'); // use the matcher module


rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, cb => {
        console.log(cb.intent);
        rl.prompt();

        if(cb.intent == 'Exit'){
            process.exit(0);
        }

        else if(cb.intent == 'Current Weather'){
            
            
            //with API : API key:0etMGIdnAcAkhXj6mkhMYTuSxgmYwMa2
            
            var keys = {"Paris":"623","London":"328328","New York":"349727"};
            var key = keys[cb.entities.city];
            var URL = "http://dataservice.accuweather.com/currentconditions/v1/{"+key+"}&apikey={0etMGIdnAcAkhXj6mkhMYTuSxgmYwMa2}";
            console.log("Temperature in "+cb.entities.city+" is : ");
            axios.get("http://dataservice.accuweather.com/currentconditions/v1/"+key+"?apikey=0etMGIdnAcAkhXj6mkhMYTuSxgmYwMa2&language=en").then( (response) => {console.log(response.data[0].Temperature.Metric.Value + " °C");} );  
            

            // With module getweather


        }

        else if(cb.intent == 'get weather'){
            console.log(cb.entities);
            var city = /\b(?<city>(?!today|tomorrow|weather|time)[A-Za-z]{3,})/.exec(input);
            var time = /\b(?<time>tomorrow|today)\b/.exec(input);
            console.log(city.groups.city,time.groups.time);
            
        }
    });
});