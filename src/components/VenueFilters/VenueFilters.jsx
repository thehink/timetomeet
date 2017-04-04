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
					<div className="row">

						<div className="col-xs-4 col-md-4">
							<h1 className="name">{ venueData.plantName }</h1>
							<p className="place">
								{`${venueAddress.street} ${venueAddress.city.name}`}
							</p>
						</div>

						<div className="col-xs-8 col-md-8">
							<div className="filter-form date">
								<input
									className="form-control"
									tabIndex = "1"
									type = "number"
									min = {0}
									max = {500}
									defaultValue = "test"
									autoComplete = "off"
									name = "persons"
									placeholder = { lang.searchPersons }
									/>
								<input
									className="form-control"
									readOnly = "true"
									tabIndex = "2"
									type = "text"
									defaultValue = {''}
									autoComplete = "off"
									name = "date"
									id = "date"
									placeholder = {lang.searchDate}
									/>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}
