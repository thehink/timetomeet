import React from 'react';

export default class VenueFilters extends React.Component {

	componentDidMount(){
		$(".venue_filters").sticky();
	}

  render () {
    return (
      <div className="venue_filters">
				<div id="venue_filters">
					<div>
						<h1 className="name">{ venueData.plantName }</h1>
						<p className="place">
							{`${venueAddress.street} ${venueAddress.city.name}`}
						</p>
					</div>
				</div>
      </div>
    );
  }
}
