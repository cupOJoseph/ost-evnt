// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Web3 = require('web3');

//console.log(Web3); //test to see if global web3 object is working. It is.

app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// init sqlite db
var fs = require('fs');
var dbFile = './.data/sqlite.db';
var exists = fs.existsSync(dbFile);
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbFile);

// if ./.data/sqlite.db does not exist, create it, otherwise print records to console
db.serialize(function(){
  if (!exists) {
    db.run('CREATE TABLE Users (dream TEXT)');
    console.log('New table Users created!');
    
    // insert default dreams
    db.serialize(function() {
      //db.run('INSERT INTO Dreams (dream) VALUES ("Find and count some sheep"), ("Climb a really tall mountain"), ("Wash the dishes")');
    });
  }
  else {
    console.log('Database "Users" ready to go!');
    db.each('SELECT * from Users', function(err, row) {
      if ( row ) {
        console.log('record:', row);
      }
    });
  }
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

 

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

//my code here

var OSTSDK = require('@ostdotcom/ost-sdk-js');
var apiEndpoint = 'https://sandboxapi.ost.com/v1/'; 
var api_key = process.env.ost_api_key;
var api_secret = process.env.ost_secret;

const ostObj = new OSTSDK({apiKey: api_key, apiSecret: api_secret, apiEndpoint: apiEndpoint});

//user json object that we use:
/*
{
  "is": {},
  "name": {},
  "icon": {},
  "address": {}
}
*/

//const object for ost api that are useful
const userService = ostObj.services.users;
const airdropService = ostObj.services.airdrops;
const actionService = ostObj.services.actions;


//var userAlice = userService.create({name: 'Alice'}).then(function(a){console.log(JSON.stringify(a))}).catch(console.log); //  returns object containing Alice's id, among other information, which you will need later
//var userBob = userService.create({name: 'Bob'}).then(function(a){console.log(JSON.stringify(a))}).catch(console.log);  // returns object containing Bob's id, among other information, which you will need later

console.log("airdropping!");
airdropService.execute({amount: 1,  user_ids: 'ffb7b094-b7ed-477a-9a0b-3c42a39cd7d8'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); }); //airdrops 1 BT to the selected user id.

//airdrop tokens to the address. airdrop based on returned id from executed airdrop command above.
airdropService.get({id: 'df3da1c3-dec2-4bf7-83cf-2d7f7c1bbe65'}).then(function(res) { console.log(JSON.stringify(res)); }).catch(function(err) { console.log(JSON.stringify(err)); });

//TODO make form item show address of the user.

