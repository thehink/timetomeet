import React from 'react';

import './VenueDescription.scss';

export default class VenueDescription extends React.Component {
	render () {
		return (
			<div className="venue-description">
				<h2>Om { venueData.plantName }</h2>
				<p>{ venueData.plantFacts }</p>
			</div>
		);
	}
}
