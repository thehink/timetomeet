import React from 'react';

export default class VenueDescription extends React.Component {
	render () {
		return (
			<div className="venue-description">
				<h1>Om { venueData.plantName }</h1>
				<p>{ venueData.plantFacts }</p>
			</div>
		);
	}
}
