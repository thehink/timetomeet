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
						<p className="name">{ this.props.name }</p>
					</div>
					<RoomsAdditionalSeatings
						name = { this.props.seatingsName }
						tags = { this.props.seats }
						/>
					<RoomsAdditionalFacilities
						name = { this.props.technologiesName }
						tags = { this.props.technologies }
						/>
					<FacilityBeverage
						name = { this.props.foodsName }
						tags = { this.props.foods }
						/>
				</div>
			</div>
    );
  }
}
