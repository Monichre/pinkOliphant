(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.mapInit = function(lat, lng){
	var mapOptions = {
	center:new google.maps.LatLng(lat, lng),
	mapTypeId: google.maps.MapTypeId.ROADMAP,
	zoom:10
	};
	var venueMap;
	venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
  var pinLocation = new google.maps.LatLng(lat, lng);
  var startPosition = new google.maps.Marker({
    position: pinLocation,
    map:venueMap,
    icon:"../../images/pin2.png"
  });

  venueMap.set('styles', [
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [
        { color: '#ABFFFB' },
        { weight: .5 }
      ]
    }, {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        { saturation: 100 },
        { invert_lightness: true }
      ]
    }, {
      featureType: 'landscape',
      elementType: 'geometry',
      stylers: [
        { hue: '#ABFFFB' },
        { gamma: 1.4 },
        { saturation: 92 },
        { lightness: 96 }
      ]
      }, {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      { visibility: 'off' }
    ]
  }, {
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { visibility: 'on' },
      { hue: '#D6CFFF' },
      { lightness: 50 },
      { saturation: 10 }
    ]
  }
  ]);

}

},{}],2:[function(require,module,exports){
var mapInit = require('../js/map.js').mapInit;


$(document).ready(function() {
  $('.btn-success').click(function() {
    // var city = $('#location').val();
    $('#map').append(mapInit(-33.8675, 151.2070));
  });

});

//gets called on button click in index.html
function runAjax() {

  $.get('/tweets', function(data, status){

    //put the values into an array, seemed chill
    var outputArr = [JSON.parse(data)];

    for (var i = 0; i <5; i++) {

      // console.log(outputArr[0]);
      console.log(outputArr[0].statuses[i].user.name);
      console.log(outputArr[0].statuses[i].user.name && outputArr[0].statuses[i].text && outputArr[0].statuses[i].user.location);


      $('.tweets').append("<blockquote>" + outputArr[0].statuses[i].text + "</blockquote>");

      // $('#twitter-data').text("<li>" + outputArr[i].statuses[i].text + "</li>");
    }
    //just putting it in the dom to test.
      // output.text(data.statuses.);


   });
};

$(document).ready(function(){

    runAjax();

});

},{"../js/map.js":1}]},{},[2]);
