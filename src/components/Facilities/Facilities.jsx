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

				<div className="row">

					<div className="col-md-12"><h1>FACILITETER</h1></div>

					<div className="col-md-12">

						<h2>Sittningsalternativ</h2>

						<ul>

							{this.state.seating.map(this.renderItem)}

						</ul>

					</div>

					<hr />

					<div className="col-md-12">

						<h2>Utrustning</h2>

							<ul>

								{this.state.gear.map(this.renderItem)}

							</ul>

					</div>

					<hr />

					<div className="col-md-12">

						<h2>Mat & Dryck</h2>

							<ul>

								{this.state.food.map(this.renderItem)}

							</ul>

					</div>

				</div>

			</div>
    );
  }
}
