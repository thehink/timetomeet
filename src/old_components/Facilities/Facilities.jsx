import React from 'react';

import RoomsAdditionalSeatings from '../RoomsAdditionalSeatings';
import RoomsAdditionalFacilities from '../RoomsAdditionalFacilities';
import FacilityBeverage from '../FacilityBeverage';

export default class Facilities extends React.Component {

	componentDidMount(){

	}

  render () {
    return (
			<div className="venue_facilities v_info" id="facilities">
				<div>
					<div className="heading">
						<p className="name">{ lang.venueFacilities }</p>
					</div>
					<RoomsAdditionalSeatings />
					<RoomsAdditionalFacilities />
					<FacilityBeverage />
				</div>
			</div>
    );
  }
}
