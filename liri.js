require("dotenv").config();
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
let song = 
spotify 
  .search({ type: 'track', query: song })
  .then(function(response) {
    console.log(JSON.stringify(response.tracks.items[0].artists[0].name));
    console.log(JSON.stringify(response.tracks.items[0].name));
  })
  .catch(function(err) {
    console.log(err);
  });

// `concert-this`

// `spotify-this-song`

`movie-this`
let movie = process.argv[2];
var axios = require("axios");

axios.get("http://www.omdbapi.com/?t="+ movie + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release year: " + response.data.Year);
    console.log("IMDB rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes rating: " + response.data.Ratings[1].Value);
    console.log("Country where produced: " + response.data.Country);
    console.log("Languages: " + response.data.Language);
    console.log("Movie Plot: "+ response.data.Plot);
    console.log("Actors: "+ response.data.Actors);
  }
// );
// `do-what-it-says`
