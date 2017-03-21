import React from 'react'

import MainSlider from '../MainSlider';
import VenueFilters from '../VenueFilters';
import DescriptionData from '../DescriptionData';
import Facilities from '../Facilities';
import OptionsNearby from '../OptionsNearby';

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
									<div className="read-more">
										<button type="button" className="btn btn-success btn-xs">Mer information</button>
									</div>
							</div>
						</div>
						<div className="col-sm-7 col-sm-offset-0 col-md-7 col-md-offset-0 col-xs-12 col-xs-offset-0 venue_info">
							VenueRooms
							VenueMap
							<OptionsNearby
								venue={ 2 }
								/>
						</div>
					</div>
				</div>
      </div>
    );
  }
}
