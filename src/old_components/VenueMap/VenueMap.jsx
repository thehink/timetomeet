import React from 'react';

export default class VenueMap extends React.Component {

	componentDidMount(){
		let t = {
        center: new google.maps.LatLng(venueData.visitingAddress.lat, venueData.visitingAddress.long),
        zoom: 17,
        zoomControl: !0,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT
        },
        disableDoubleClickZoom: !0,
        mapTypeControl: !0,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR
        },
        scaleControl: !0,
        scrollwheel: !0,
        panControl: !0,
        streetViewControl: !0,
        draggable: !0,
        overviewMapControl: !0,
        overviewMapControlOptions: {
            opened: !1
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
      , a = document.getElementById("map")
      , r = new google.maps.Map(a,t);
    let marker = new google.maps.Marker({
        icon: "assets/images/map-marker.png",
        position: new google.maps.LatLng(venueData.visitingAddress.lat, venueData.visitingAddress.long),
        map: r
    });
	}

  render () {


    return (
			<div className="venue_map v_info" id="venue_map">
				<div>
					<div className="heading">
						<h2 className="name">{ lang.venueMap }</h2>
					</div>
					<div id="map"></div>
	      </div>
			</div>
    );
  }
}
