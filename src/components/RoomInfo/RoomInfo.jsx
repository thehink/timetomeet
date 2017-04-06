import React from 'React';

import "./RoomInfo.scss";

export default class RoomInfo extends React.Component {

	renderItem(item) {
		return (
			 <li key={item.id}>{item.name}</li>
		)
	}


	render() {


		return (

			<div className="room-info">

				<h1>{this.props.info.name}</h1>

				<h6>Här kommer addressen från adress_data-objecktet</h6>

				<h2>Faciliteter</h2>

				<ul className="tech-list">
					{this.props.info.tech.map(this.renderItem)}
				</ul>

				<hr />

				<h5>Max antal</h5>
				<li>{this.props.info.maxSeats}</li>

				<h5>Sittningsalternativ</h5>
					<ul>
						{this.props.info.defaultSeating.map(this.renderItem)}
					</ul>

			</div>
		)
	}


}
