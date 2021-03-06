import React from 'react'

import './VenueFilters.scss';

export default class VenueFilters extends React.Component {

	componentDidMount(){
		$(".venue-filters").sticky();

		$("#date").datepicker({
			showOtherMonths: !0,
			selectOtherMonths: !0,
			dateFormat: "d M yy",
			firstDay: 1,
			minDate: 0
		})
	}

	render () {
		return (
			<div className="venue-filters-wrapper">
				<div className="venue-filters">
					<div className="row">

						<div className="name-wrapper hidden-xs col-xs-4 col-md-4">
							<h1 className="name">{ venueData.plantName }</h1>
							<p className="place">
								{`${venueAddress.street} ${venueAddress.city.name}`}
							</p>
						</div>

						<div className="col col-xs-12 col-md-8">
							<div className="filter-form date">
								<input
									className="form-control form-icon person"
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
									className="form-control form-icon calender"
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
