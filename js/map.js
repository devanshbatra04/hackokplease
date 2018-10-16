//WINDOW ONLOAD
$(window).load(function() {

	/*-------------------------------------------------*/
    /* =  MAP
    /*-------------------------------------------------*/


      // 	var styles = [
      //    {
      //     "featureType": "administrative",
      //     "stylers": [
      //       { "visibility": "off" }
      //     ]
      //   },{
      //     "featureType": "poi",
      //     "stylers": [
      //       { "visibility": "off" },
      //       { "color": "#ffffff" }
      //     ]
      //   },{
      //     "featureType": "road",
      //     "stylers": [
      //       { "visibility": "on" },
      //       { "color": "#ffffff" }
      //
      //     ]
      //   },{
      //     "featureType": "transit",
      //     "stylers": [
      //       { "visibility": "off" }
      //     ]
      //   },{
      //     "featureType": "landscape",
      //     "stylers": [
      //       { "visibility": "on" },
      //       { "color": "#B3B3B3" }
      //     ]
      //   },{
      //     "featureType": "water",
      //     "stylers": [
      //       { "visibility": "on" },
      //       { "color": "#14a1fb" }
      //     ]
      //   }
      //
      // ];



        // var map = new google.maps.Map(document.getElementById('map'),
        // mapOptions);
        //
        // var marker1 = new google.maps.Marker({
        //     position: new google.maps.LatLng(45.258493, 19.836867),
        //     map: map,
        //     icon: 'images/pin.svg' // This path is the custom pin to be shown. Remove this line and the proceeding comma to use default pin
        // });
        //

    function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 28.6081, lng: 77.0362},
            zoom: 15
        });

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails({
            placeId: 'ChIJmzx4FjUFDTkRRoSiIqtA5Qc'
        }, function(place, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                console.log(place);
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                        'Place ID: ' + place.place_id + '<br>' +
                        place.formatted_address + '</div>');
                    infowindow.open(map, this);
                });
            }
        });
    }
    initMap();




});
