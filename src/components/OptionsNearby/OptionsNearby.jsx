import React from 'react';

export default class OptionsNearby extends React.Component {

	state = {
		venues: []
	}

	componentDidMount(){
		var _this=this;
      $.post( options.restURL + "/plantswithindistance/", {plantId: this.props.venue, distanceInMeters: "10000" }, function( a ) {
        a = a.plants_data;
        var r = [];
        var i=0;
        for (var n in a){
          a[n].id = n,
          r[n] = a[n];
          i++;
          if (i === 4) { break; }
        }
        _this.setState({venues: r});
      });
	}

	renderVenue(venue, i){
		var url = options.venuePageUrl + "/" + venue.nameForUrl + "_" + venue.plantId;

		let image;

		if (venue.images) {
        image = venue.images.shift();
    }

		return (
			<div key={`venue_${venue.plantId}`} className="col-md-6 col-md-offset-0 col-xs-12 col-xs-offset-0">
				<div className="nearby_item">
					<div className="appearance">
						<img src={`https://${image.image}`} width={`302px`} alt="" />
					</div>
					<div className="description">
						<p className="name">{ venue.name }</p>
						<p>{ cutWords(venue.factsAboutPlant) }</p>
					</div>
					<div className="nearby_look">
						<a href={ url }>
							{ lang.viewRooms }
						</a>
					</div>
				</div>
			</div>
		);
	}

  render () {
		if(this.state.venues.length == 0){
			return (<div>Loading...</div>);
		}

    return (
			<div className="venue_nearby v_info" id="options_nearby">
				<div className="venue_nearby v_info">
					<div className="heading">
						<h2 className="name">{ lang.venueOptionsNearby }</h2>
					</div>
					<div className="row">
						{ this.state.venues.map(this.renderVenue) }
					</div>
				</div>
			</div>
    );
  }
}
