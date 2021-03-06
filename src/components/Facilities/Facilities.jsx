import React from 'react'

import "./Facilities.scss";

export default class Facilities extends React.Component
{

	state = {
			seating: venueData.seats,
			gear: venueData.technologies,
			food: venueData.plantFoodBeverages

		}



		renderItem (item) {
			return (
				<li key={item.id}>{item.name}</li>
			)
		}

  render () {



    return (
			<div className="facilities">

					<h1>FACILITETER</h1>

						<h2>Sittningsalternativ <i className="icon chair" /></h2>

						<ul>

							{this.state.seating.map(this.renderItem)}

						</ul>

					<hr />

						<h2>Utrustning <i className="icon projektor" /></h2>

							<ul>

								{this.state.gear.map(this.renderItem)}

							</ul>

					<hr />

						<h2>Mat & Dryck <i className="icon food" /></h2>

							<ul>

								{this.state.food.map(this.renderItem)}

							</ul>

			</div>
    );

  }

}
