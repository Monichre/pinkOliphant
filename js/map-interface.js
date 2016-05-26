var mapInit = require('../js/map.js').mapInit;


$(document).ready(function() {
  $('.btn-success').click(function() {
    // var city = $('#location').val();
    $('#map').append(mapInit(-33.8675, 151.2070));
  });

});
