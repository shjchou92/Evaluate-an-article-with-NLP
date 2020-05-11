const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
var aylien = require("aylien_textapi");
const bodyParser = require('body-parser');

const textapi = new aylien({
	application_id: process.env.API_ID,
	application_key: process.env.API_KEY
});

const endpoint = "https://api.aylien.com/api/v1/sentiment";

// Starting up an instance of app
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!');
})

app.post('/api', function (req, res) {
    const urlNews = req.body.url;
    console.log(urlNews);
    console.log("Sending request");
   	textapi.sentiment({ 'url': urlNews }, function(error, response) {
   		if (error === null) {
   			console.log(response);
   			res.send(response)
   		}
   	})
   })

module.exports = app;