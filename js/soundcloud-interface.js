var SC = require('soundcloud');

SC.initialize({
  client_id: '0dc0c020a154214799b8690d0b00643a',
  redirect_uri: 'http://localhost:3000'
});



$(document).ready(function() {
    console.log("I pooped");
    SC.stream('tracks').then(function(tracks){
    tracks[0].play();
  });
});
