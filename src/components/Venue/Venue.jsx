import React from 'react'

import MainSlider from '../MainSlider';
import VenueFilters from '../VenueFilters';
import DescriptionData from '../DescriptionData';
import Facilities from '../Facilities';

export default class Venue extends React.Component {
  render () {
    return (
      <div className="venue">
        <MainSlider />
				<div className="container">
					<div className="row">
						<div className="col-sm-5 col-sm-offset-0 col-md-5 col-md-offset-0 col-xs-12 col-xs-offset-0 venue_filters_wrap" >
							<VenueFilters />
							<div className="venue_info venue_about">
								<DescriptionData />
								<Facilities />
							</div>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
