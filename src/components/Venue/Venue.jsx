import React from 'react';

import VenueImage from '../VenueImage';
import Facilities from '../Facilities';
import VenueFilters from '../VenueFilters';

import './Venue.scss';

export default class Venue extends React.Component {
  render () {
    return (
      <div className="venue container-fluid">
				<div className="row">
					<div className="col-xs-12 col-md-8 col-lg-9">
						<VenueImage />
						<VenueFilters />
					</div>
					<div className="col-xs-12 col-md-4 col-lg-3">
						<Facilities />
					</div>
				</div>
      </div>
    );
  }
}
