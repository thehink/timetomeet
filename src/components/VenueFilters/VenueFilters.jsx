import React from 'react'

import './VenueFilters.scss';

export default class VenueFilters extends React.Component {

	componentDidMount(){
		$(".venue-filters").sticky();
	}

  render () {
    return (
			<div className="venue-filters-wrapper">
				<div className="venue-filters">
					<h1 className="name">{ venueData.plantName }</h1>
					<p className="place">
						{`${venueAddress.street} ${venueAddress.city.name}`}
					</p>
	      </div>
			</div>
    );
  }
}
