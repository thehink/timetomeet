import React from 'react';

import NearbyCard from '../NearbyCard';

import './NearbyVenues.scss';

export default class NearbyVenues extends React.Component {

	state = {
		fetching: true,
		venues: []
	}

	componentDidMount(){
		$.post( options.restURL + "/plantswithindistance/", {plantId: 2, distanceInMeters: "10000" }, data => {
			console.log(data);
			this.setState({
				fetching: false,
				venues: data.plants_data || []
			});
		});
	}

	renderNearbyCard(venue){
		return (
			<div className="col-md-4">
				<NearbyCard
					venue={ venue }
					/>
			</div>
		);
	}

	renderLoader(){
		if(this.state.fetching){
			return (
				<div className="loading">
					Hämtar närliggande alternativ...
				</div>
			)
		}
	}

	render () {
		return (
			<div className="nearby-venues">
				<h2>{ lang.venueOptionsNearby }</h2>
				{ this.renderLoader() }
				<div className="nearby-cards row">
					{ this.state.venues.map(this.renderNearbyCard) }
				</div>
			</div>
		);
	}
}
