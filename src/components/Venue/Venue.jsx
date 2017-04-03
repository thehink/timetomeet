import React from 'react';

import VenueImage from '../VenueImage';
import Facilities from '../Facilities';
import VenueFilters from '../VenueFilters';

export default class Venue extends React.Component {
  render () {
    return (
      <div className="venue container">
				<div className="row">
					<div className="col-8">
						<VenueImage />
					</div>
					<div className="col-4">
						<Facilities />
					</div>
					<VenueFilters />
				</div>
      </div>
    );
  }
}
