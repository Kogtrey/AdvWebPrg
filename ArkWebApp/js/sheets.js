// Client ID and API key from the Developer Console
var CLIENT_ID = '1061113568610-8s98fduq68fl1e5fdpt1etoi7odh30ei.apps.googleusercontent.com';
var API_KEY = 'AIzaSyDQgv6vM0I0Mj1yIkGorIMc27gvUhxcuNA';

var MY_SPREADSHEET_ID = '1SU1HKT0YZcZNY6KMISaPXAr4GhjHgCpTuqiYr19g-qQ';
var DINO_SHEET_RANGE = 'Sheet1!A2:J';

// Array of API discovery doc URLs for APIs used by the quickstart
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = "https://www.googleapis.com/auth/spreadsheets.readonly";

var authorizeButton = document.getElementById('authorize_button');
var signoutButton = document.getElementById('signout_button');

var Dinos = [];

class Dino {
  constructor(name,health,stamina,oxygen,food,weight,melee,speed,gender,species) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.oxygen = oxygen;
    this.food = food;
    this.weight = weight;
    this.melee = melee;
    this.speed = speed;
    this.gender = gender;
    this.species = species;
  }

  getInfo(){
    return this.name + ", " + this.gender + " " + this.species;
  }

  getStats(){
    return [this.health,this.stamina,this.oxygen,this.food,this.weight,this.melee,this.speed];
  }
}


/**
 *  On load, called to load the auth2 library and API client library.
 */
function handleClientLoad() {
  gapi.load('client:auth2', initClient);
}

/**
 *  Initializes the API client library and sets up sign-in state
 *  listeners.
 */
function initClient() {
  gapi.client.init({
    apiKey: API_KEY,
    clientId: CLIENT_ID,
    discoveryDocs: DISCOVERY_DOCS,
    scope: SCOPES
  }).then(function () {
    // Listen for sign-in state changes.
    gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

    // Handle the initial sign-in state.
    updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    authorizeButton.onclick = handleAuthClick;
    signoutButton.onclick = handleSignoutClick;
  }, function(error) {
    appendPre(JSON.stringify(error, null, 2));
  });
}

/**
 *  Called when the signed in status changes, to update the UI
 *  appropriately. After a sign-in, the API is called.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    authorizeButton.style.display = 'none';
    signoutButton.style.display = 'block';
    pageSetup();
  } else {
    authorizeButton.style.display = 'block';
    signoutButton.style.display = 'none';
  }
}

/**
 *  Sign in the user upon button click.
 */
function handleAuthClick(event) {
  gapi.auth2.getAuthInstance().signIn();
}

/**
 *  Sign out the user upon button click.
 */
function handleSignoutClick(event) {
  gapi.auth2.getAuthInstance().signOut();
}

/**
 * Append a pre element to the body containing the given message
 * as its text node. Used to display the results of the API call.
 *
 * @param {string} message Text to be placed in pre element.
 */
function appendPre(message) {
  var pre = document.getElementById('content');
  var textContent = document.createTextNode(message + '\n');
  pre.appendChild(textContent);
}

//Function to setup spreadsheet access
function pageSetup(){
  gapi.client.sheets.spreadsheets.values.get({
     spreadsheetId: MY_SPREADSHEET_ID,
     range: DINO_SHEET_RANGE,
   }).then(function(response) {
     var range = response.result;
     if (range.values.length > 0) {
       appendPre('Dino info');
       for (i = 0; i < range.values.length; i++) {
         var row = range.values[i];
         let dino = new Dino(row[0],row[1],row[2],row[3],row[4],row[5],row[6],row[7],row[8],row[9]);
         Dinos.push(dino);

       }
     } else {
       appendPre('No data found.');
     }

     names = nameList();
     console.log(names);
     createOptions(Dinos,names);


   }, function(response) {
     appendPre('Error: ' + response.result.error.message);
   });
}

function showPlot(id){
  var canvas = document.getElementById('myChart');
  canvas.style.display = 'block';

  var ctx = canvas.getContext('2d');
  var chart = new Chart(ctx, {
    //Type of chart to create
    type: 'radar',

    data: {
      labels: ['Health','Stamina','Oxygen','Food','Weighet','Melee','Speed'],
      datasets: [{
        label: Dinos[id].name,
        backgroundColor: 'rgb(255, 99, 132,0.1)',
        borderColor: 'rgb(255,99,132,0.1)',
        data: Dinos[id].getStats()
      }]
    },

    options: {}
  });
}

function showPlot_All(){
  document.getElementById('myChart').style.display = 'none';
  for (var i = 0; i < Dinos.length; i++) {
    newDino = Dinos[i]
    plot(newDino,i)
  }
}

function plot(dino,idnum){
  //get The div
  var div = document.getElementById('plots');

  //make a new canvas
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  //create a new chart on the new canvas
  var chart = new Chart(ctx, {
    //Type of chart to create
    type: 'radar',

    data: {
      labels: ['Health','Stamina','Oxygen','Food','Weighet','Melee','Speed'],
      datasets: [{
        label: dino.name,
        backgroundColor: 'rgb(255, 99, 132,0.1)',
        borderColor: 'rgb(255,99,132,0.1)',
        data: dino.getStats(),
        options: {
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }
          }
        }
      }]
    },

    options: {}
  });

  //Add canvas to div
  div.appendChild(canvas);
}

function nameList(){
  list = []
  for (var i = 0; i < Dinos.length; i++) {
    list.push(Dinos[i].name);
  }
  return list;
}

function createOptions(Dinos,list){
  var select = document.getElementById('Dinos');
  for (var i = 0; i < list.length; i++) {
    select.options[select.options.length] = new Option(list[i],Dinos[i]);
  }
}
