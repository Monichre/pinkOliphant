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
