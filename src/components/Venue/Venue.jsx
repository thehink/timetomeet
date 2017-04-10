import React from 'react';

import VenueImage from '../VenueImage';
import Facilities from '../Facilities';
import VenueFilters from '../VenueFilters';
import RoomList from '../RoomList';
import VenueDescription from '../VenueDescription';
import VenueMap from '../VenueMap';
import NearbyVenues from '../NearbyVenues';

import './Venue.scss';

export default class Venue extends React.Component {
	render () {
		return (
			<div className="venue container-fluid">

				<div className="row">
					<div className="nm col-xs-12 col-md-8 col-lg-9">
						<VenueImage />
						<VenueFilters />
					</div>
					<div className="nm col-xs-12 col-md-4 col-lg-3">
						<Facilities />
					</div>
				</div>

				<div className="row">
					<RoomList />
				</div>

				<div className="row venue-info">
					<div className="col col-md-5 col-xs-12">
						<VenueDescription />
					</div>
					<div className="col col-md-7 col-xs-12">
						<VenueMap />
					</div>
				</div>

				<hr />

				<div className="row">
					<NearbyVenues />
				</div>

			</div>
		);
	}
}
